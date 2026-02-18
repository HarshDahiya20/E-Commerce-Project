import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router'
import { RxCross2 } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from '../context/MainContextFile';

export default function Header() {

    let {cart} =useContext(CartContext)
    

    let [menu,setMenu]= useState(false)



  return (
    <div className=''>
      <nav className="  w-full bg-[#101828] sticky top-0 start-0 z-20  border-b border-[#ccc] ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl text-heading text-white font-semibold whitespace-nowrap">
              Flowbite
            </span>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-500 hover:bg-blue-600 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-[5px] text-sm px-3 py-2 focus:outline-none flex items-center"
            >
              <Link
                to={"/cart"}
                aria-current="page"
                className='flex'
              ><span className='sm:hidden text-2xl me-1'><TiShoppingCart /></span>
              <span className='sm:inline hidden me-1'>View Cart </span> ({cart.length}) 
              </Link>  
              
            </button>
            <button
              type="button"
              className="text-white bg-blue-500 hover:bg-blue-600 ms-3 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-[5px] text-sm px-3 py-2 focus:outline-none sm:inline hidden"
            >
              Login
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center text-white p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg  onClick={()=> setMenu(true)}
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
          <div
            className={` md:static md:h-auto md:border-0 border fixed top-0 z-3 md:bg-transparent bg-white h-screen w-full sm:w-[40%] md:block md:w-auto duration-1000
                ${menu ? "left-[0%]":"left-[-100%]"}
               
              items-center justify-between `}
            id="navbar-sticky"
          >
            <div className='md:hidden relative items-center py-5 px-4 border-b-[1px] border-[#ccc]'>
               <span className='flex gap-[8px] text-xl font-bold'>
                   <img src="https://flowbite.com/docs/images/logo.svg" className="w-[30px]" alt="Flowbite Logo"/> 
                   Flowbite
               </span> 
             <span onClick={()=> setMenu(false)} className='absolute top-[35%]  font-bold text-2xl right-2'><RxCross2 /></span>
            </div>
 
            <ul className="flex flex-col p-4 md:p-0 md:mt-4 font-medium md:border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 md:text-blue-500  bg-brand rounded-sm md:bg-transparent md:text-fg-brand md:p-0 hover:text-blue-600"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about-us"}
                  className="block py-2 px-3 md:text-white text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent  hover:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <div
                  
                  className="relative block py-2 px-3 group  md:text-white text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent  hover:text-blue-500"
                >
                 <Link
                  to={"/product"} >Products</Link>

                  {/* <div className='absolute top-full left-0 h-[200px] w-[250px] px-3 py-5 text-black  bg-white shadow-md shadow-gray-400 rounded-[10px] overflow-y-scroll hidden group-hover:block'>
                      {
                        category.map((obj,index)=>{
                          return(
                            <li key={index} className='list-none px-3 py-2 hover:bg-gray-200'> 
                              <Link to={`/product/${obj.slug}`}>
                                {obj.name}
                              </Link>
                                
                            </li>
                          )
                        })
                      }
                  </div> */}
                </div>
              </li>
              <li>
                <Link
                  to={" "}
                  className="block py-2 px-3 md:text-white text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent  hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
              <li>
                
              </li>
              <button
                type="button"
                className="sm:hidden text-white bg-blue-500 hover:bg-blue-600 ms-3 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-[5px] text-sm px-3 py-2 mt-5 focus:outline-none"
              >
                Login
              </button>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}
