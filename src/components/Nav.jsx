import React, { useState, useRef, useEffect } from 'react';
import Logo from '../assets/logo.png';
import { FiMenu } from "react-icons/fi";
import { HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close menu if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Disable page scroll
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      // Enable page scroll
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Navbar */}
      <div className='bg-blue-950 h-12 flex items-center justify-between relative z-50'>
        {/* Logo */}
        <Link to='/'>
          <div className='w-20 ml-2'>
            <img src={Logo} alt="logo" />
          </div>
        </Link>

        {/* Hamburger */}
        <div
          className='text-white font-bold text-3xl mr-2 cursor-pointer md:hidden'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <FiMenu />}
        </div>
      </div>

      {/* Blur overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"></div>
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-12 right-0 h-[calc(100%-3rem)] bg-white shadow-lg transition-transform duration-300 z-40
          ${menuOpen ? "translate-x-0" : "translate-x-full"} w-[70%] p-6`}
      >
        <ul className="flex flex-col space-y-6 mt-6 text-lg">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              होम
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              हमारे बारे में
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              सेवाएँ
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              संपर्क करें
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
