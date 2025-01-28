import React from 'react'
import { FiSearch } from 'react-icons/fi'
const Home = () => {
  return (
    <>
    <section className=' w-[90%] mt-10 mx-auto' >
        <div className="search">
            <h2 className='text-3xl font-medium ' >Technical Interview Resources</h2>
            <h4 className='text-lg font-[400] opacity-65 ' >Find all the technical interview esources here</h4>
    <form role="search"   aria-label="Site search">
    <div className="relative w-full max-w-md mx-auto">
      {/* Search Input */}
      <input
        type="search"
        placeholder="Search skills, role, seniority"
        className="border p-2 pl-10 w-full rounded-full focus:outline-none"
      />
      {/* Icon */}
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
    </div>

</form>
        </div>
        <main className='grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-4  ' >
            {
 Array.from({length:10}).map((_,index)=>(
    <div key={index} className="border-2 cursor-pointer rounded-lg border-slate-200 shadow-2xl hover:shadow-slate-600 flex flex-col items-start  p-4   ">
    <span className={`  ${index<3 ?"bg-green-500":"bg-orange-400"} ${index>6 ? "bg-red-500":""}  font-medium text-white py-1 px-4 flex rounded-md `} >{index < 3 ? "Easy" : index > 6 ? "Hard" : "Medium"} </span>
    <h5 className='my-4 opacity-70 hover:opacity-100 ' >DATA STRUCTURES & ALGORITHMS</h5>
    <h5 className="font-medium text-xl mb-2 ">
        Design a Free Food App {index+1}
    </h5>
     
    <p className='text-start font-medium opacity-60 hover:opacity-100 ' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet distinctio, quidem enim similique numquam fugit natus a officiis atque, praesentium, architecto culpa dolores? Accusamus, repellat sint. Corrupti architecto aliquid excepturi.</p>
 </div>
 ))

            }
        
         
        </main>
    </section>
    
    
    </>
  )
}

export default Home