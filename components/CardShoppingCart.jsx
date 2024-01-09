'use client'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decreaseQuantity, increaseQuantity } from '@/redux/features/cartSlice';
import { MdDelete } from "react-icons/md";



const CardShopppingCart = ({ productsdata }) => {

    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleincreaseQuantity = (productId) => {
        dispatch(increaseQuantity(productId))
    }

    const handledecreaseQuantity = (productId) => {
        dispatch(decreaseQuantity(productId))
    }


    return (

        <tr className='flex justify-between  items-center '>
            <td>
                <img src={productsdata.imgUrl} width={100} alt="" />
            </td>
            <td className=' flex gap-8 justify-between max-lg:flex-col'>
                <div className='flex flex-col items-start text-start  gap-y-1 w-52 overflow-hidden  text-black'>
                    <h1 className='text-body-bold '>{productsdata.title}</h1>
                    <p className='t text-small-regular '>{productsdata.brand}</p>
                    <p className='text-tiny-medium '>Enviado y vendido por: Yaslin S. A</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <div className=' gap-x-2 flex justify-center items-center border border-neutral-300 p-1'>
                        <button onClick={()=>handledecreaseQuantity(productsdata._id)}>
                            <p className='px-2'>-</p>
                        </button>
                        <p>{productsdata.quantity}</p>
                        <button onClick={()=>handleincreaseQuantity(productsdata._id)}>
                            <p className='px-2'>+</p>
                        </button>
                    </div>
                </div>
            </td>

            <td >
                ${productsdata.price}
            </td>
            <td >
                <button onClick={() => handleRemoveFromCart(productsdata._id)}>
                    <MdDelete className='text-neutral-600 hover:text-red-700' size={24} />
                </button>
            </td>
        </tr>
    )
}

export default CardShopppingCart