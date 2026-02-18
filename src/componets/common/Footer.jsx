import React from 'react'

export default function Footer() {
  return (
    <div className=''>
      <footer className="bg-[#101828] rounded-[10px] shadow-xs border border-default m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-7"
                alt="Flowbite Logo"
              />
              <span className="text-heading self-center text-white text-2xl font-semibold whitespace-nowrap">
                Flowbite
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
              <li>
                <a href="#" className="hover:underline text-gray-400 me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400 me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400 me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-default border-gray-400 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-body sm:text-center text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>

    </div>
  )
}
