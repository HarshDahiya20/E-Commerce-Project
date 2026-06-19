import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router'
import { RxCross2 } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from '../context/MainContextFile';

export default function Header() {

  let { cart } = useContext(CartContext)


  let [menu, setMenu] = useState(false)



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
              onClick={() => setMenu(true)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center text-white p-2 w-10 h-10 justify-center text-sm rounded-md md:hidden hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-700 cursor-pointer"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
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

          {/* Backdrop overlay for mobile menu */}
          {menu && (
            <div
              onClick={() => setMenu(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300"
            />
          )}

          <div
            className={`md:static md:h-auto md:border-0 border-r border-[#2d3748] fixed top-0 z-50 bg-[#101828] h-screen w-full sm:w-[50%] md:block md:w-auto transition-all duration-300 ease-in-out
                ${menu ? "left-0" : "left-[-100%]"}
               
              items-center justify-between `}
            id="navbar-sticky"
          >
            <div className='md:hidden relative flex items-center justify-between py-5 px-6 border-b border-[#2d3748]'>
              <span className='flex gap-[8px] text-xl font-bold text-white'>
                <img src="https://flowbite.com/docs/images/logo.svg" className="w-[30px]" alt="Flowbite Logo" />
                Flowbite
              </span>
              <button
                onClick={() => setMenu(false)}
                className='text-gray-400 hover:text-white font-bold text-2xl cursor-pointer p-1'
              >
                <RxCross2 />
              </button>
            </div>
 
            <ul className="flex flex-col p-6 md:p-0 md:mt-0 font-medium md:flex-row md:space-x-8 rtl:space-x-reverse md:bg-transparent bg-transparent gap-4 md:gap-0">
              <li>
                <Link
                  to={"/"}
                  onClick={() => setMenu(false)}
                  className="block py-2 px-3 md:text-blue-500 text-blue-500 bg-gray-800 md:bg-transparent rounded-[5px] md:p-0 hover:text-blue-400"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about-us"}
                  onClick={() => setMenu(false)}
                  className="block py-2 px-3 text-gray-300 hover:text-white rounded-[5px] hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:text-white md:p-0 md:dark:hover:bg-transparent hover:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <div
                  className="relative block py-2 px-3 group text-gray-300 hover:text-white rounded-[5px] hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:text-white md:p-0 md:dark:hover:bg-transparent hover:text-blue-500"
                >
                  <Link
                    to={"/product"}
                    onClick={() => setMenu(false)}
                    className="block w-full"
                  >Products</Link>
                </div>
              </li>
              <li>
                <Link
                  to={" "}
                  onClick={() => setMenu(false)}
                  className="block py-2 px-3 text-gray-300 hover:text-white rounded-[5px] hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:text-white md:p-0 md:dark:hover:bg-transparent hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
              <li className="md:hidden mt-4">
                <button
                  type="button"
                  className="w-full text-white bg-blue-500 hover:bg-blue-600 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-[5px] text-sm px-4 py-2.5 focus:outline-none cursor-pointer"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}
