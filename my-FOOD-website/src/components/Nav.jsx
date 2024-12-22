// "use client"
// import { useState, useEffect } from 'react';
// import SearchBar from './Searchbar';
// import Signup from '@/app/(routes)/signup/page';
// import Signin from '@/app/(routes)/signin/page';
// import Image from 'next/image';
// import Link from 'next/link';
// import Logo from "../components/img/Logo.png"
// import { Button } from './ui/button';
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

// export default function Nav() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalType, setModalType] = useState('');

//   const openModal = (type) => {
//     setModalType(type);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalType('');
//   };

//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.classList.add('overflow-y-hidden');
//     } else {
//       document.body.classList.remove('overflow-y-hidden');
//     }
//   }, [isModalOpen]);

//   return (
//     <div className="items-center justify-between px-12 py-3 flex mb-1">
//       <div>
//         <Link href="/">
//           <Image src={Logo} alt="logo" width={80} />
//         </Link>
//       </div>

//       <div>
//          <SignedOut>
//             <SignInButton/>
//           </SignedOut>
//           <SignedIn>
//             <UserButton/>
//           </SignedIn>
//       </div>
    
//       <div className="flex items-center justify-center gap-10">
//         <Button onClick={() => openModal('signin')} className='bg-transparent hover:bg-slate-50 text-orange-600 font-bold px-10 py-6 border border-gray-300 text-lg rounded  transition transform hover:scale-105'>Sign In</Button>
//         <Button onClick={() => openModal('signup')} className='bg-black hover:bg-slate-700 text-white font-bold px-10 py-6 rounded text-lg transition transform hover:scale-105'>Sign Up</Button>
//         {isModalOpen && modalType === 'signup' && <Signup onClose={closeModal} />}
//         {isModalOpen && modalType === 'signin' && <Signin onClose={closeModal} />}
//         <Link href="/dashboard">
//           <Button className='bg-black hover:bg-slate-700 text-white font-bold px-10 py-6 rounded text-lg transition transform hover:scale-105'>To Dashboard</Button>
//         </Link>
//       </div>
//     </div>
//   );
// }










// "use client"
// import { useState, useEffect } from 'react';
// import SearchBar from './Searchbar';

// import Image from 'next/image';
// import Link from 'next/link';
// // import Logo from "../components/img/Logo.png"
// import { Button } from './ui/button';

// export default function Nav() {
  

//   return (
//     <div className="items-center justify-between px-12 py-3 flex mb-1">
//       <div>
//         <Link href="/">
//           {/* <Image src={Logo} alt="logo" width={80} /> */}
//         </Link>
//       </div>

    
//       <div className="flex items-center justify-center gap-10">
//         <Button onClick={() => openModal('signin')} className='bg-transparent hover:bg-slate-50 text-orange-600 font-bold px-10 py-6 border border-gray-300 text-lg rounded  transition transform hover:scale-105'>Sign In</Button>
//         <Button onClick={() => openModal('signup')} className='bg-black hover:bg-slate-700 text-white font-bold px-10 py-6 rounded text-lg transition transform hover:scale-105'>Sign Up</Button>
//         {isModalOpen && modalType === 'signup' && <Signup onClose={closeModal} />}
//         {isModalOpen && modalType === 'signin' && <Signin onClose={closeModal} />}
//         <Link href="/dashboard">
//           <Button className='bg-black hover:bg-slate-700 text-white font-bold px-10 py-6 rounded text-lg transition transform hover:scale-105'>To Dashboard</Button>
//         </Link>
//       </div>
//     </div>
//   );
// }















"use client";
import React, { useState, useEffect } from "react";
import SearchBar from "./Searchbar";
import Link from "next/link";

import Signup from '@/app/(routes)/signup/page';
import Signin from '@/app/(routes)/signin/page';
import Image from "next/image";
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType('');
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [isModalOpen]);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            {/* <span className="ml-2 text-xl font-bold text-white">MyBrand</span> */}
              <Image src='/logo.png' width="100" height='70'/>
          </div>

          {isScrolled && (
            <SearchBar/>
          )
        }

        {/* Sign Up/Login Button */}
        <div className="flex items-center justify-center gap-10">
          <button onClick={() => openModal('signin')} className='bg-transparent hover:bg-slate-50 text-orange-600 font-bold px-6 py-3 border border-gray-300 text-lg rounded  transition transform hover:scale-105'>Sign In</button>
          <button onClick={() => openModal('signup')} className='bg-black hover:bg-slate-700 text-white font-bold px-4 py-3 rounded text-lg transition transform hover:scale-105'>Sign Up</button>
          {isModalOpen && modalType === 'signup' && <Signup onClose={closeModal} />}
          {isModalOpen && modalType === 'signin' && <Signin onClose={closeModal} />}
          <Link href="/dashboard">
            <button className='bg-black hover:bg-slate-700 text-white font-bold px-6 py-3 rounded text-lg transition transform hover:scale-105'>To Dashboard</button>
          </Link>
        </div>
      
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && !isScrolled && (
          <div className="md:hidden bg-gray-800">
            <a
              href="#home"
              className="block py-2 px-4 text-white hover:bg-gray-600 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 px-4 text-white hover:bg-gray-600 transition"
            >
              About
            </a>
            <a
              href="#services"
              className="block py-2 px-4 text-white hover:bg-gray-600 transition"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block py-2 px-4 text-white hover:bg-gray-600 transition"
            >
              Contact
            </a>
            <div className="py-2 px-4">
              <button className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white">
                Sign Up / Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}