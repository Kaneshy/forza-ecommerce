'use client'
import { useRouter } from "next/navigation"

const CheckOutbar = () => {

  const router = useRouter()

  return (
    <main>
        <section className='p-4 select-none flex justify-between items-center'>
            <div 
            onClick={()=>router.back()}
            className='text-heading2-bold'>FORZA</div>
            <div className='flex justify-between gap-x-4 max-md:hidden'>
                <div>carrito</div>
                <div>Identificacion</div>
                <div>Entrega</div>
                <div>Pago</div>
                <div>Confirmacion</div> 
            </div>
            <div className='text-small-semibold'>Sitio Seguro </div>
        </section>
    </main>
  )
}

export default CheckOutbar