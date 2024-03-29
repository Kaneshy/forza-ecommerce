"use client";

import { Mail, Lock, User } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";


const Signup = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    return setUser((prevInfo) => ({ ...prevInfo, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(user);
    try {
      if (!user.name || !user.email || !user.password) {
        setError("please fill all the fields");
        return;
      }
      const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      if (!emailRegex.test(user.email)) {
        setError("invalid email id");
        return;
      }
      const res = await axios.post("/api/register", user);
      console.log(res.data);
      if (res.status == 200 || res.status == 201) {
        console.log("user added successfully");
        setError("");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      setError("");
    } finally {
      setLoading(false);

      setUser({
        name: "",
        email: "",
        password: "",
      });
    }
  };
  return (
    <div
      className="min-h-screen bg-gradient-purple"
      
    >
      <div className="grid place-items-center mx-auto max-w-4xl w-full py-10 min-h-screen">
        <div className="flex bg-white justify-center items-center lg:flex-row flex-col gap-6 lg:gap-0 w-full shadow-md rounded-2xl">
        <div className="lg:w-1/2 w-full bg-[#5D7DF3]">
            <img
              src={'https://res.cloudinary.com/dh01ngdjo/image/upload/v1704482958/FASHION/am-desk_atn5sb.webp'}
              alt="bg"
              className="w-full h-full"
              width={300}
              height={300}
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col justify-center items-center py-6 bg-[#eff1f6]">
            <div className="rounded px-4 py-2  ">
              <Image src={'/assets/logo.svg'} alt="bg" width={70} height={70} />
            </div>
            <form
              className="w-full px-5 py-6 space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col w-full lg:px-5">
                <label className="text-sm">Fullname</label>
                <div className="bg-white flex justify-start items-start py-3 px-4 rounded text-slate-600 text-lg mt-1">
                  <User className="w-7 h-7 text-[#A1BDFD]" />
                  <input
                    type={"text"}
                    placeholder="John Doe"
                    name="name"
                    className="outline-none w-full px-4"
                    value={user.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:px-5">
                <label className="text-sm">Email</label>
                <div className="bg-white flex justify-start items-start py-3 px-4 rounded text-slate-600 text-lg mt-1">
                  <Mail className="w-7 h-7 text-[#A1BDFD]" />
                  <input
                    type={"email"}
                    placeholder="example@123.com"
                    name="email"
                    className="outline-none w-full px-4"
                    value={user.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:px-5">
                <label className="text-sm">Password</label>
                <div className="bg-white flex justify-start items-start py-3 px-4 rounded text-slate-600 text-lg mt-1">
                  <Lock className="w-7 h-7 text-[#A1BDFD]" />
                  <input
                    type={"password"}
                    placeholder="**********"
                    name="password"
                    className="outline-none w-full px-4"
                    value={user.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid place-items-center w-full mx-auto pt-7">
                  {error && <p className="py-6 text-lg">{error}</p>}
                  <button
                    type="submit"
                    className="bg-[#5D7DF3] text-white text-lg w-full px-8 py-3 rounded-md uppercase font-semibold"
                  >
                    {loading ? "Processing" : " Register"}
                  </button>
                </div>
                <div className="flex justify-center w-full items-center gap-3 py-3">
                  <div className="border-b border-gray-800 py-2 w-full px-6" />
                  <div className="mt-3">or</div>
                  <div className="border-b border-gray-800 py-2 w-full px-6" />
                </div>

                <div onClick={() => signIn("google", {callbackUrl: DEFAULT_LOGIN_REDIRECT})} className="rounded px-6 py-2 shadow cursor-pointer bg-gray-50 grid place-items-center mx-auto mb-8">
                  <FcGoogle size={30} />
                </div>

                <div className="text-lg flex  text-slate-900 font-medium">
                  <span>Have an account?</span>
                  <Link href="/login" className="text-[#5D7DF3] pl-3 hover:underline">
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;