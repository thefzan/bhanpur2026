import React from 'react';
import Logo from '../assets/logo.png';
import { FiMenu } from "react-icons/fi";
const Nav = () => {
  return (
    <div className='bg-blue-950 h-12 flex items-center justify-between'>
        <div className='w-20 ml-2'>
            <img src={Logo} alt="logo" />
        </div>
        <div className='text-white font-bold text-3xl mr-2'>
            <FiMenu />
        </div>
    </div>
  )
}

export default Nav