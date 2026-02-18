import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { LuMinus } from "react-icons/lu";
import { MdAdd } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CartContext } from '../context/MainContextFile';
import { useContext } from 'react';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export default function Cart() {

    let {cart,setCart}=useContext(CartContext)
    
    let total = cart.reduce((t,obj)=> t += obj.price*obj.qty ,0)

    let taxRate = total*0.18

    return (
        <div>
            <div className='py-[64px] bg-[#101828]'>
                <div className='max-w-[1280px] mx-auto lg:p-0 p-5'>
                    <h2 className='text-white font-semibold text-2xl'>Shopping Cart</h2>
                    <div className='mt-6 grid lg:grid-cols-[70%_auto] grid-cols-1 h  gap-[50px]'>

                        <div>
                            {
                                cart.map((obj,index)=> <Cartrow key={index} data={obj}/> )
                            }
                            


                        </div>

                        <div >
                            <div className='border-1 border-[#ccc] rounded-[15px] p-5  bg-[#1E2939] mb-5'>
                                <h2 className='text-white font-semibold text-xl mb-5'>Order summary</h2>
                                <div className='border-b-[1px] border-gray-400'>
                                    <div className='flex justify-between mb-4'>
                                        <h5 className='text-gray-400 '>Original price</h5>
                                        <h3 className='text-white font-semibold'>Rs. {total}</h3>
                                    </div>
                                    
                                    <div className='flex justify-between mb-4'>
                                        <h5 className='text-gray-400 '>Tax</h5>
                                        <h3 className='text-white font-semibold'>Rs. {taxRate}</h3>
                                    </div>

                                </div>
                                <div className='flex justify-between py-4'>
                                    <h5 className='text-white font-semibold'>Total</h5>
                                    <h3 className='text-white font-semibold'>Rs.{total+taxRate}</h3>
                                </div>
                                <button className='text-center py-2 w-full text-white text-[14px] font-semibold cursor-pointer'>Proceed to Checkout</button>
                            </div>
                            <div className='border-1 border-[#ccc] rounded-[15px] p-5  bg-[#1E2939]'>
                                <h2 className='text-white font-semibold text-[14px] mb-4'>Do you have a voucher or gift card?</h2>
                                <input type="text" className='py-2 px-3 text-white w-full bg-[#364153] border-1 border-[#ccc] rounded-[10px]' />
                                <h3 className='text-white text-center my-5'>Apply Code</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Cartrow({data}) {

    let {cart,setCart}=useContext(CartContext)

    let {id} = data

    let removeCart=()=> {
        Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
        
                let finalCart = cart.filter((obj)=> obj.id != id)
        
                setCart(finalCart)
        
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
            });
    }

    let plusQty =(id)=>{
        setCart(cart.map((item)=>
            item.id === id 
        ?
        {...item, qty: item.qty +1}
        :
        item
        ))
    }

    let minQty =(id)=>{
        setCart(cart.map((item)=>
            item.id === id && item.qty > 1
        ?
        {...item, qty: item.qty -1}
        :
        item
        ))
    }
    return (
        <div className='border-1 border-[#ccc] rounded-[15px] p-6 w-full h-fit bg-[#1E2939] mb-6'>
            <div className='flex gap-8  items-center justify-between'>
                <div className=' bg-white'>
                    <img src={data.image} className='w-20' alt="" />
                </div>

                <div className='w-full'>
                    <h2 className='text-white font-bold mb-3 hover:underline'>{data.name}</h2>
                   
                    <h3 className='text-white mb-3'>Rs.{data.price}</h3>
                    <div className='flex gap-5'>
                        <button className='text-gray-400 flex items-center gap-2 hover:text-white'> <FaRegHeart /> Add to Favorites</button>

                        <button onClick={removeCart} className='text-red-600 font-bold flex items-center gap-2'><RxCross2 /> Remove </button>
                    </div>
                </div>

                <div className='flex '>
                    <div className='flex text-white'>
                        <button onClick={()=>minQty(data.id)} className=' p-[2px] items-center border-1 border-[#ccc] rounded-[5px]'><LuMinus /></button>

                        <span className='px-3'>{data.qty}</span>

                        <button onClick={()=>plusQty(data.id)} className=' p-[2px] items-center border-1 border-[#ccc] rounded-[5px]'><MdAdd /></button>
                    </div>

                    <div className='text-white md:w-32 font-bold text-end'>
                        Rs. {data.qty*data.price}
                    </div>
                </div>
            </div>
        </div>
    )
}
