import React from 'react'
import image from "../assets/images.png"
import { FaArrowRightLong } from "react-icons/fa6";
const Explore = () => {
  return (
    <>
    
    <section className='mt-20  w-[90%] mx-auto ' >
        <main>
            <h2 className='text-2xl md:text-4xl font-medium' >
                Explore more products on intervue
            </h2>
            <div className="grid mt-7 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
               
<div className='flex md:mx-3 shadow-2xl rounded-md  p-3 hover:shadow-slate-700 flex-col items-start' >
                    <div className="w-full">
                        <img src={image} className='object-fill rounded-md w-full ' alt="" />
                    </div>
                    <h3 className='font-medium my-2 ' >
                        On-demand
                    </h3>
                    <p className='text-start opacity-70 mt-3 mb-10 ' >
                        Save 90% of enginnering & recuritment bandwidth , outsource candidate interviews to us 
                    </p>
                    <a className='text-blue-500 flex items-center font-medium ' href="#explore">Know more <FaArrowRightLong className='mx-3' /> </a>
                </div>

                <div className='flex md:mx-3 shadow-2xl rounded-md  p-3 hover:shadow-slate-700 flex-col items-start' >
                    <div className="w-full">
                        <img src={image} className='object-fill rounded-md w-full ' alt="" />
                    </div>
                    <h3 className='font-medium my-2 ' >
                       Live interviews
                    </h3>
                    <p className='text-start opacity-70 mt-3 mb-10 ' >
                       Assess candidates in real-time with our live coding environment & integrated video calls
                    </p>
                    <a className='text-blue-500 flex items-center font-medium ' href="#explore">Know more <FaArrowRightLong className='mx-3' /> </a>
                </div>
                <div className='flex md:mx-3 shadow-2xl rounded-md  p-3 hover:shadow-slate-700 flex-col items-start' >
                    <div className="w-full">
                        <img src={image} className='object-fill rounded-md w-full ' alt="" />
                    </div>
                    <h3 className='font-medium my-2 ' >
                        Assessments
                    </h3>
                    <p className='text-start opacity-70 mt-3 mb-10 ' >
                        Share assessments across batches with MCQ, Programming and Subjective questions 
                    </p>
                    <a className='text-blue-500 flex items-center font-medium ' href="#explore">Know more <FaArrowRightLong className='mx-3' /> </a>
                </div>
                
                
              
                
               
            </div>
        </main>
    </section>
    
    </>
  )
}

export default Explore