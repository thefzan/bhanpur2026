import React from 'react'
import Bottom from '../assets/logo.png';
import { IoIosCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#343A40] text-white'>
        <div className=' flex  justify-center pt-5'>
            <img src={Bottom} alt="Logo"  className='w-32'/>
        </div>
         <div className=' flex justify-center'>
            <a
  href="https://wa.me/919919092470"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="bg-green-800 rounded flex items-center p-1.5 font-bold gap-1 mt-2 cursor-pointer text-white">
    <div><FaWhatsapp /></div>
    <div>WhatsApp</div>
  </div>
</a>
        </div>
        <div className='flex justify-center'>
           <div className=' flex  items-center font-sans text-sm mt-2'>
            <div ><IoIosCall/></div>
            <div>+91 9919092470 |</div>
            <div ><CgMail  className='text-xl pt-0.5'/></div>
            <div>syedshazadhusain@gmail.com</div>
           </div>
        </div>
       
        <div className='flex justify-center mt-2 pb-5'>
            <h4 className='text-center text-sm'>© 2026 Shifa-e-Shafi Dawakhana | All Right Reserved <br />Devloped By Syed Faizan</h4>
        </div>
    </div>
  )
}

export default Footer