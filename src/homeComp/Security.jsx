import React from 'react'
import { GrKey } from 'react-icons/gr'
import { FaLayerGroup } from 'react-icons/fa'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'
import { BiGlobe } from 'react-icons/bi'
import { FaArrowRightLong } from "react-icons/fa6";
const Security = () => {
  return (
    <>
    <section className='mt-40 py-20 px-3 w-[90%] mx-auto bg-[#f1f1f1] ' >
        <main className='md:w-[75%]  ' >
            <h3 className='text-2xl' >
                Security is our top priority
            </h3>
            <p className='opacity-70 mt-4 mb-8 ' >Intervue serives startups to fortune 500 companies with enterprise grade security baked in by design</p>
            <div className='grid md:grid-flow-col md:grid-rows-2 gap-4 ' >

               <div className='row-span-2 bg-white shadow-2xl hover:shadow-slate-600 rounded-2xl ' >

                <div className="p-3 mx-3 flex flex-col items-start ">

                    <div className=""><GrKey className='text-3xl' /></div>
                    <h5 className='font-medium' >Security</h5>
                    <p className='text-start opacity-70 ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a porro quas, officia dolorem alias delectus neque reiciendis, possimus quaerat minus </p>
                    <div className='flex  justify-end items-end w-[90%]' >
                     <FaArrowRightLong className='text-3xl ' />  
                    </div>
                </div>
               </div>
               <div className='row-span-2 bg-white shadow-2xl hover:shadow-slate-600 rounded-2xl  ' > <div className="p-3 w-full mx-3 flex flex-col items-start">
                    <div className=""><FaLayerGroup className='text-3xl' /></div>
                    <h5 className='font-medium' >Compliances</h5>
                    <p className='text-start opacity-70 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a porro quas, officia dolorem alias delectus neque reiciendis, possimus quaerat minus </p>
                    <div className='flex justify-end items-end w-[90%]' >
                     <FaArrowRightLong className='  text-3xl ' />  
                    </div>
                </div></div>
               <div className='col-span-1 bg-white shadow-2xl hover:shadow-slate-600 rounded-2xl  ' > <div className="p-3 justify-center mx-3 flex flex-col items-start">
                    <div className=""><BsFillRocketTakeoffFill className='text-3xl' /></div>
                    <div className="flex w-full place-content-between">
                    <h5 className='flex  items-end' >Intervue for Startups 
                     </h5>
                     <FaArrowRightLong className='text-2xl  ' />
                     </div>  
                </div></div>
               <div className='col-span-1 bg-white shadow-2xl hover:shadow-slate-600 rounded-2xl  ' ><div className="p-3 mx-3 flex justify-center flex-col items-start">
                    <div className=""><BiGlobe className='text-3xl' /></div>
                    <div className='flex w-full place-content-between' >
                    <h5 className='   ' >Intervue for Enterprises 
               
                    </h5>
                    <FaArrowRightLong className=' text-2xl ' /> 
                    </div>
                   
                </div> </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default Security