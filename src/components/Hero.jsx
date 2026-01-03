import React from 'react'
import Pic1 from '../assets/Pic1.jpg'
import Map from "../assets/map.jpg"

const Hero = () => {
  return (
    <>
    <div className='mt-1 '>
      <img src={Pic1} alt="" className='rounded-2xl' />
    </div>
    <div className=' h-25 flex items-center flex-col bg-gray-200 rounded-2xl mt-2 m-2'>
        <h2 className='font-bold mt-2'>SIR Draft Publication 2026 (Bhanpur)</h2>
        <button className='bg-green-600 h-9 mt-4 rounded w-[80%] text-white font-bold' >Download SIR Draft 2026</button>  
    </div>
    <div className=' h-25 flex items-center gap-2 bg-gray-200 rounded-2xl mt-2 m-2 justify-center'>
        <div className=' h-22 w-42 flex flex-col justify-center items-center rounded-xl'>
            <h2 className='font-bold text-center'>Bhanpur 2003 <br/>Voter list</h2>
            <button className='bg-pink-600 w-[80%] mt-3 font-bold text-white rounded'>Download</button>
        </div>
         <div className=' h-22 w-42 flex flex-col justify-center items-center rounded-xl'>
            <h2 className='font-bold text-center'>Bhanpur 2025 <br/>Voter list</h2>
            <button className='bg-blue-950 w-[80%] mt-3 font-bold text-white rounded'>Download</button>
        </div>
    </div>
    <div className='ml-2 mr-2 rounded'>
        <img src={Map} alt="Bhanpur_Map" className='rounded-xl' />
    </div>
    </>
  )
}

export default Hero