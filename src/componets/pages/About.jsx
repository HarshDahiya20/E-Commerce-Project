import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { FaArrowRight } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { LuBox } from "react-icons/lu";


export default function About() {
  return (
    <>

      <div>
        <div className='py-[128px]'>
          <div className='max-w-[1152px] mx-auto items-center px-5 grid md:grid-cols-2 grid-cols-1'>
            <div className='px-3 mb-5'>
              <h1 className='text-[#101828] font-bold lg:text-6xl md:text-4xl text-5xl'>Useful Tools to  <span className='lg:hidden inline'><br /></span> <span className='text-blue-600'>Help You Build Faster.</span></h1>

              <p className='mt-5 text-[20px] text-gray-500 mb-5'>It's never been easier to build beautiful websites that convey your message and tell your story.</p>

              <div className='flex '>
                <button className="text-white  bg-blue-500 hover:bg-blue-600 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs leading-5 rounded-[5px] text-[18px] px-3 py-2 focus:outline-none flex items-center">Try It Free <span className='ms-3'><FaArrowRight /></span>  </button>

                <button className="text-gray-600 bg-gray-300 hover:bg-gray-400 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs leading-5 rounded-[5px] text-[16px] px-3 py-2 focus:outline-none ms-4 ">Learn More  </button>
              </div>

            </div>
            <div>
              <img src="/images/imgi_2_photo-1498049860654-af1a5c566876.jpg" className='rounded-[10px] shadow-2xl' alt="" />
            </div>
          </div>


        </div>

        <div className='pb-[80px]'>
          <div className='max-w-[1280px] mx-auto sm:px-[64px] px-[32px] items-center grid md:grid-cols-2 grid-cols-1'>
            <div className='lg:ps-10 sm:pe-4'>
              <div className='lg:pe-[80px] lg:ps-[64px] p-[15px] py-[8px] border-2 shadow-2xl'>
                <img src="/images/imgi_3_productivity.png" className='w-full' alt="" />
              </div>
            </div>
            <div className='sm:ps-[40px] p-0 sm:mt-0 mt-[30px]'>
              <h1 className='text-3xl font-semibold '>Boost Productivity</h1>
              <p className='text-[18px] pt-4 lg:pe-[128px] pb-8 text-gray-600'>Build an atmosphere that creates productivity in your organization and your company culture.</p>
              <div>
                <li className='flex items-center py-1 text-gray-600'> <span className='text-white p-1 text-[20px] rounded-[50%] bg-yellow-300 me-3'><TiTick />
                </span>  Maximize productivity and growth</li>
                <li className='flex items-center py-1 text-gray-600'> <span className='text-white p-1 text-[20px] rounded-[50%] bg-yellow-300 me-3'><TiTick />
                </span>  Maximize productivity and growth</li>
                <li className='flex items-center py-1 text-gray-600'> <span className='text-white p-1 text-[20px] rounded-[50%] bg-yellow-300 me-3'><TiTick />
                </span>  Maximize productivity and growth</li>
              </div>
            </div>
          </div>


          <div className='max-w-[1280px] mx-auto sm:px-[64px] px-[32px] items-center grid md:grid-cols-2 grid-cols-1'>

            <div className='lg:ps-[128px] p-0 sm:mb-0 mb-[30px] sm:mt-0 mt-[30px]'>
              <h1 className='text-3xl font-semibold '>Automated Tasks</h1>
              <p className='text-[18px] pt-4 lg:pe-[50px] pb-8 text-gray-600'>Save time and money with our revolutionary services. We are the leaders in the industry.</p>
              <div>
                <li className='flex items-center py-1 text-gray-600'> <span className='text-white p-1 text-[20px] rounded-[50%] bg-yellow-300 me-3'><TiTick />
                </span>  Automated task management workflow</li>
                <li className='flex items-center py-1 text-gray-600'> <span className='text-white p-1 text-[20px] rounded-[50%] bg-yellow-300 me-3'><TiTick />
                </span>  Detailed analytics for your data</li>
                <li className='flex items-center py-1 text-gray-600'> <span className='text-white p-1 text-[20px] rounded-[50%] bg-yellow-300 me-3'><TiTick />
                </span>   Some awesome integrations</li>
              </div>
            </div>

            <div className=' sm:px-4'>
              <div className='lg:pe-[80px] lg:ps-[64px] p-[15px] py-[8px] border-2 shadow-2xl'>
                <img src="/images/imgi_4_settings.png" className='w-full' alt="" />
              </div>
            </div>

          </div>
        </div>

        <div className='py-[80px] bg-[#F9FAFB]'>
          <div className='max-w-[1152px] mx-auto md:px-[64px] px-[32px] grid lg:grid-cols-2 grid-cols-1'>

             <div className='px-3 border-2 bg-white max-w-[485px] mx-auto'>
                <img src="/images/imgi_5_feature-graphic.png"  alt="" />
              </div>

            <div className='px-3 md:ps-[40px] lg:mt-0 mt-5'>
              <h1 className='text-3xl font-bold '>Jam-packed with all the tools you need to succeed!</h1>
              <p className='text-[18px] pt-4  pb-8 text-gray-600'>It's never been easier to build a business of your own. Our tools will help you with the following:</p>
              <div>
                <li className='flex items-center py-1 text-gray-600'> <span className=' p-1 text-[20px] text-pink-500 me-3'><LuBox />
                </span> Faster Processing and Delivery</li>
                <li className='flex items-center py-1 text-gray-600'> <span className=' p-1 text-[20px] text-pink-500 me-3'><LuBox />
                </span>  Out of the Box Tracking and Monitoring</li>
                <li className='flex items-center py-1 text-gray-600'> <span className=' p-1 text-[20px] text-pink-500 me-3'><LuBox />
                </span>  100% Protection and Security for Your App</li>
              </div>
            </div>

             
          </div>
        </div>

        <div className='py-[80px]'>
            <div className='max-w-[1152px] mx-auto px-4'>
                <h1 className='font-semibold text-5xl text-center mb-5'>Pricing Options</h1>
                <p className=' text-[24px] text-center mb-5'>We've got a plan for companies of any size</p>

                <div className='grid md:grid-cols-3 '>
                    <div className='border-1 max-w-[373.33px] mx-auto border-[#ccc] py-[48px] px-[40px] text-center md:mb-0 mb-5' >
                        <h1 className='font-semibold text-4xl mb-5'>Basic</h1>
                        <p>The basic plan is a good fit for smaller teams and startups</p>
                        <div className='flex items-center justify-center my-[50px] gap-4'>
                            <h1 className='font-semibold text-6xl'>$19</h1>
                            <p className='text-[14px] text-start'>per user <br/> per month</p>
                        </div>
                        <button className= "text-blue-500 hover:text-white border-1 border-blue-500  hover:bg-blue-500 box-border border  focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-[5px] text-[20px] w-full py-2 focus:outline-none">Select Plan</button>
                    </div>
                    <div className='border-1 max-w-[373.33px] mx-auto bg-[#F3F4F6] border-[#ccc] py-[48px] px-[40px] text-center md:mb-0 mb-5' >
                        <h1 className='font-semibold text-4xl mb-5'>Plus</h1>
                        <p>The plus plan is a good fit for medium-size to larger companies</p>
                        <div className='flex items-center justify-center my-[50px] gap-4'>
                            <h1 className='font-semibold text-6xl'>$39</h1>
                            <p className='text-[14px] text-start'>per user <br/> per month</p>
                        </div>
                        <button className= "text-white border-1 border-blue-500  bg-blue-500 box-border border  focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-[5px] text-[20px] w-full py-2 focus:outline-none">Select Plan</button>
                    </div>
                    <div className='border-1 max-w-[373.33px] mx-auto border-[#ccc] py-[48px] px-[40px] text-center md:mb-0 mb-5' >
                        <h1 className='font-semibold text-4xl mb-5'>Basic</h1>
                        <p>The basic plan is a good fit for smaller teams and startups</p>
                        <div className='flex items-center justify-center my-[50px] gap-4'>
                            <h1 className='font-semibold text-6xl'>$19</h1>
                            <p className='text-[14px] text-start'>per user <br/> per month</p>
                        </div>
                        <button className= "text-blue-500 hover:text-white border-1 border-blue-500  hover:bg-blue-500 box-border border  focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-[5px] text-[20px] w-full py-2 focus:outline-none">Select Plan</button>
                    </div>
                </div>
            </div>
        </div>
      </div>


      </>
      )
}
