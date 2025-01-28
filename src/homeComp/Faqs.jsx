import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
const Faqs = () => {
  return (
    <>
    <section className='mt-8 w-[90%] mx-auto ' >
        <main className='flex flex-col md:flex-row md:place-content-between' >
            <div className='flex flex-col md:w-[40%] items-start' >
                <h3 className='text-2xl' >FAQs</h3>
                <p className='opacity-70 text-start ' >Here are frequently asked questions to clear all your doubts</p>
                <div className='my-5 hidden md:flex flex-col font-medium text-start ' >
                    <h4 className='' >
                        Still have doubts?
                    </h4>
                    <a className='font-medium flex items-center text-blue-500' href=""> <IoCall/> Talk to our representative</a>
                </div>
            </div>
            <div className='md:w-[58%]' >
                <div className="my-6">
                <hr className='w-full text-black' />
                <div className='w-full flex justify-between ' >
                    <p>
                        How do i schedule an interview ?
                    </p>
                    <div className='flex items-center' >
                        <FaPlus/>
                    </div>
                </div>
                </div>
                <div className="my-6">
                <hr className='w-full text-black' />
                <div className='w-full flex justify-between ' >
                    <p>
                        Will i be charged per interview ? 
                    </p>
                    <div className='flex items-center' >
                        <FaPlus/>
                    </div>

                </div></div>
                <div className="my-6">
                <hr className='w-full text-black' />
                <div className='w-full flex justify-between ' >
                    <p>
                        Can i get a trail for On-demand interviews ?
                    </p>
                    <div className='flex items-center' >
                        <FaPlus/>
                    </div>
                </div>
                </div>
                <div className='my-5 md:hidden flex flex-col font-medium text-start ' >
                    <h4 className='' >
                        Still have doubts?
                    </h4>
                    <a className='font-medium flex items-center text-blue-500' href=""> <IoCall/> Talk to our representative</a>
                </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default Faqs