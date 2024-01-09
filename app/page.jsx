import Navbar from "@/components/bars/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main >

      <section className="home-widge-a h-screen flex flex-col">
        <Navbar value={'text-white hover:bg-white hover:text-black'}/>
        <div className="absolute max-w-96 flex flex-col gap-y-4 bottom-20 left-20 p-4 text-white">
          <h1>Para Regalar</h1>
          <p>Descubre los regalos especialmente seleccionados para ti y tus seres queridos.</p>
          <Link className="border p-4 text-center" href={'/'}>Guia de Regalos</Link>
        </div>

      </section>
      <section className="flex min-h-screen gap-2 p-16 max-lg:flex-col">
        <div className=" relative flex bg-img-woman h-screen">
          <div className="absolute bottom-10 right-10  flex flex-col gap-2">
            <h1 className="text-white text-end">WOMAN</h1>
            <Link className="p-4 text-black bg-white" href={'/'}>EXPLORE THE COLLECTION</Link>
          </div>
        </div>
        <div className="relative flex  bg-img-man h-screen">
          <div className="absolute bottom-10  right-10 flex flex-col gap-2">
            <h1 className="text-white text-end">MAN</h1>
            <Link className="p-4 text-black bg-white" href={'/'}>EXPLORE THE COLLECTION</Link>
          </div>
        </div>
      </section>
      <section className="flex min-h-screen bg-black gap-2 p-16 max-lg:flex-col">
        <div className=" relative flex bg-img-acs1 h-screen">
          <div className="absolute bottom-10 right-10  flex flex-col gap-2">
            <h1 className="text-white text-end">WOMAN</h1>
            <Link className="p-4 text-black bg-white" href={'/'}>EXPLORE THE COLLECTION</Link>
          </div>
        </div>
        <div className="relative flex  bg-img-acs2 h-screen">
          <div className="absolute bottom-10  right-10 flex flex-col gap-2">
            <h1 className="text-white text-end">MAN</h1>
            <Link className="p-4 text-black bg-white" href={'/'}>EXPLORE THE COLLECTION</Link>
          </div>
        </div>
        <div className="relative flex  bg-img-acs3 h-screen">
          <div className="absolute bottom-10  right-10 flex flex-col gap-2">
            <h1 className="text-white text-end">MAN</h1>
            <Link className="p-4 text-black bg-white" href={'/'}>EXPLORE THE COLLECTION</Link>
          </div>
        </div>
      </section>
      <section className="flex min-h-screen bg-white gap-2 p-16 max-lg:flex-col">

      </section>
    </main>
  )
}
