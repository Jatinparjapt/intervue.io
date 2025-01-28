import React from 'react'

const Feature = () => {
  return (
    <>
    <section className='mt-40  w-[90%] mx-auto ' >
        <main className='flex flex-col md:flex-row items-center ' >
            <div className='rounded-r-full bg-slate-400 -ml-12 md:w-[40%] w-full ' >
                <p className='p-3  md:py-12  text-start ' >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates culpa tempora deleniti ab veritatis aut aperiam temporibus. Laboriosam dolor corrupti sequi eum sint! Molestiae voluptas id veritatis veniam necessitatibus dolorem!
                </p>
              
            </div>
            <div className='md:w-[40%] md:ml-6 flex flex-col items-start ' >
                <p className='text-start font-medium opacity-70 my-2 ' >
                    After interviewing candidates on intervue, we were able to convert at least 5 % of people from out application base to hires
                </p>
                <h4 className='font-medium my-2 ' >
                    Niket Gupta
                </h4>
                <p className='text-start font-medium opacity-70 my-2 ' >Group head of talent acquisiton, Yubi</p>
                <a className='text-blue-500 font-medium ' href="">See more customer stories</a>
            </div>
        </main>
    </section>
    
    </>
  )
}

export default Feature