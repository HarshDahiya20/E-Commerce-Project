import React from 'react'

export default function Footer() {
  return (
    <div className=''>
      <footer className="bg-[#101828] rounded-[10px] shadow-xs border border-default m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between sm:items-center">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-7"
                alt="Flowbite Logo"
              />
              <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
                Flowbite
              </span>
            </a>
            <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm font-medium text-gray-400">
              <li>
                <a href="#" className="hover:underline hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white transition-colors duration-200">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-400 text-center">
            © 2026{" "}
            <a href="https://flowbite.com/" className="hover:underline hover:text-white">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>

    </div>
  )
}
