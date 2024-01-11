
import Carousel from "@/components/Carousel";
import Navbar from "@/components/bars/Navbar";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main >

      <section className="home-widge-a h-screen flex flex-col">
        <Navbar value={'text-white hover:bg-white hover:text-black'} />
        <div className="absolute max-w-96 flex flex-col gap-y-4 bottom-20 left-20 p-4 text-white">
          <h1>Para Regalar</h1>
          <p>Descubre los regalos especialmente seleccionados para ti y tus seres queridos.</p>
          <Link className="border p-4 text-center" href={'/'}>Guia de Regalos</Link>
        </div>

      </section>
      <section className="flex min-h-screen gap-2 p-16 max-lg:flex-col select-none">
        <div className=" relative flex bg-img-woman h-screen">
          <div className="absolute bottom-10 right-10  flex flex-col gap-2">
            <h1 className="text-white text-end">EXPLORE THE COLLECTION</h1>
            <Link href={'/filterby/bygender/female'} className="p-4 text-black bg-white text-center" >WOMAN</Link>
          </div>
        </div>
        <div className="relative flex  bg-img-man h-screen">
          <div className="absolute bottom-10  right-10 flex flex-col gap-2">
            <h1 className="text-white text-end">EXPLORE THE COLLECTION</h1>
            <Link href={'/filterby/bygender/male'} className="p-4 text-black bg-white text-center" >MAN</Link>
          </div>
        </div>
      </section>
      <section className="flex min-h-screen bg-black gap-2 p-16 max-lg:flex-col">
        <div className=" relative flex bg-img-acs1 h-screen">
          <div className="absolute bottom-10 right-10  flex flex-col gap-2">
            <h1 className="text-white text-end"> EXPLORE THE COLLECTION</h1>
            <Link href={'/filterby/bygender/female'} className="p-4 text-black bg-white text-center" >KIDS</Link>
          </div>
        </div>
        <div className="relative flex  bg-img-acs2 h-screen">
          <div className="absolute bottom-10  right-10 flex flex-col gap-2">
            <h1 className="text-white text-end"> EXPLORE THE COLLECTION</h1>
            <Link href={'/filterby/bygender/accessories'} className="p-4 text-black bg-white text-center" >ACCESSORIES</Link>
          </div>
        </div>
        <div className="relative flex  bg-img-acs3 h-screen">
          <div className="absolute bottom-10  right-10 flex flex-col gap-2">
            <h1 className="text-white text-end">EXPLORE THE COLLECTION</h1>
            <Link href={'/filterby/bygender/jewelry'} className="p-4 text-black bg-white text-center">JEWELRY</Link>
          </div>
        </div>
      </section>
      <section className="flex  text-black gap-2 p-16 max-sm:p-0 max-lg:flex-col">
        <Suspense>
          <div className=" w-full py-20">
            <h1 className="text-3xl font-bold mb-4 text-center">Best Seller</h1>
            <Carousel />
          </div>
        </Suspense>
      </section>
    </main>
  )
}
