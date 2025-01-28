import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const [hamburgerMenu , setHamburgerMenu] = useState(false)
  const handleHamburgerMenu = ()=>{
    setHamburgerMenu(!hamburgerMenu)
  }
  return (
    <>
    <header className=' w-[90%] mx-auto xl:text-xl cursor-pointer ' >
        <nav className={` text-slate-700 w-full flex  items-center place-content-between `}>
            <h2 className='text-3xl' >
              
                Int
               
                <span className='relative bottom-0.5 ' >e</span><span className='absolute left-[70px] '>_</span>
                rvu
                <span className='rotate-180 inline-block relative -bottom-1.5 ' >e</span> <span className='absolute left-32  '>_</span>
            </h2>
            <ul className='md:flex hidden items-center '>
                <li className='mx-2 hover:text-black hover:shadow-slate-700  shadow-2xl  flex items-center ' > <FcBusinessman className='mr-1'/>  Become an interviewer <MdArrowOutward className='ml-1 text-xl mb-0.5 ' /> </li>
                <li className='mx-2 hover:text-black hover:shadow-slate-700  shadow-2xl ' >Features</li>
                <li className='mx-2 hover:text-black hover:shadow-slate-700  shadow-2xl ' >Pricing</li>
                <li className='mx-2 hover:text-black hover:shadow-slate-700  shadow-2xl ' >Start a trail</li>
                <li className='mx-2 hover:text-black hover:shadow-slate-700  shadow-2xl  border-2 border-black rounded-sm px-2 ' >Login</li>
                <li className='mx-2 border bg-black px-2 rounded-sm border-black text-white hover:shadow-slate-700  shadow-2xl ' >Signup</li>
            </ul>
     

            <div onClick={handleHamburgerMenu}  className="md:hidden ">
             {hamburgerMenu? <GiHamburgerMenu className='text-2xl' /> : <IoMdClose className='text-3xl' />  } 
            </div>
           
        </nav>
        <ul
  className={`transition-all mt-10 w-full duration-700   ease-in-out md:hidden overflow-hidden ${
    hamburgerMenu ? "max-h-0" : "max-h-[400px]"
  } flex-col space-y-2`}
>
  <li className="mx-2 hover:text-black flex justify-center w-full  items-center">
    <FcBusinessman className="mr-1" /> Become an interviewer{" "}
    <MdArrowOutward className="ml-1 text-xl mb-0.5" />
  </li>
  <li className="mx-2 hover:text-black">Features</li>
  <li className="mx-2 hover:text-black">Pricing</li>
  <li className="mx-2 hover:text-black">Start a trial</li>
  <li className="mx-2 hover:text-black border-2 border-black rounded-sm px-2">
    Login
  </li>
  <li className="mx-2 border bg-black px-2 rounded-sm border-black text-white">
    Signup
  </li>
</ul>
    </header>
    </>
  )
}

export default Header