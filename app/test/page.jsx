'use client'
import { useSelector, useDispatch } from 'react-redux';
import CardShopppingCart from '@/components/CardShoppingCart';
import { useEffect, useState } from 'react';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalCheckOut = useSelector(state => state.cart.total)
    console.log('quitar', totalCheckOut, cartItems)

    const [iva, setiva] = useState(0)
    const [TotalF, setTotalF] = useState(0)

    useEffect(() => {
      const ivaData = (totalCheckOut * 0.12).toFixed(2)
      setiva(ivaData)
      const totalF = (Number(ivaData) + Number(totalCheckOut)).toFixed(2)
      setTotalF(totalF)
    }, [totalCheckOut])
    

    return (
        <main className='bg-neutral-200 p-8 max-sm:p-0 flex max-md:flex-col gap-4 justify-center'>
            <table border="1" className='w-full bg-white  flex flex-col  text-center max-w-2xl  p-4' >
                <thead className='border-b-2 pb-2 mb-4'>
                    <tr className='w-full flex  justify-between  text-small-regular text-neutral-600  '>
                        <th className='flex px-2'>Image</th>
                        <th className='users_products_link '  >Details</th>
                        <th className='users_products_link'  >Precio</th>
                    </tr>
                </thead>
                {cartItems.length === 0 ? (

                    <tbody className='p-4 text-center'>
                        <tr className='flex justify-between  items-center '>
                            <td>
                                <p>Your cart is empty.</p>
                            </td>
                        </tr>
                    </tbody>
                ) : (
                    <tbody className='flex flex-col gap-4 '>
                        {cartItems.map((x) => {
                            return (
                                <CardShopppingCart key={x._id} productsdata={x} />
                            )
                        })}
                    </tbody>
                )}
            </table>
            <section className='w-96 max-md:w-full flex flex-col py-4 px-10 gap-4 bg-white'>
                <h1 className='p-4 text-center'>Facturacion </h1>
                <div>
                    <div className=' text-small-regular text-neutral-400 flex justify-between gap-2'>
                        <p>Subtotal</p>
                        <p>${totalCheckOut && (totalCheckOut).toFixed(2)}</p>
                    </div>
                    <div className=' text-small-regular text-neutral-400 flex justify-between gap-2'>
                        <p>Descuentos</p>
                        <p>$0</p>
                    </div>
                    <div className=' text-small-regular text-neutral-400 flex justify-between gap-2'>
                        <p>Impuestos</p>
                        <p>${iva}</p>
                    </div>
                </div>
                <div className=' text-body-bold flex  justify-between gap-2'>
                    <p>Total</p>
                    <p>${TotalF}</p>
                </div>
                <button className='w-full p-2 text-white bg-black'>Proceder al pago</button>
            </section>
        </main>

    );
};

export default Cart;