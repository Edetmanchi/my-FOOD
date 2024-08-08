// "use client"
// import { useState, useEffect } from 'react'
// import SearchBar from './Searchbar'
// import Signup from "@/app/(routes)/signup/page"
// import Signin from '@/app/(routes)/signin/page'
// import Image from "next/image"
// import Link from "next/link"
// import Logo from "../components/img/Logo.png"
// import { Button } from './ui/button'
// // import {Spinner} from "../components/Spinner"


// export default function Nav() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false);

//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.classList.add('overflow-y-hidden');
//     } else {
//       document.body.classList.remove('overflow-y-hidden');
//     }
//   }, [isModalOpen]);
//   return (
//     <div className='items-center justify-between px-12 py-5 flex mb-3'>
//         <div>
//             <Link href='/'> 
//                 <Image src={Logo} alt="logo" width={80} />
//             </Link>
//         </div>
//         <div className="w-[40rem]">
//             <SearchBar /> 
//         </div>
        
//         <div className='flex items-center justify-center gap-10'>
//             <Signup onClick={openModal}/>
//             <Signin onClick={openModal}/>

//             {isModalOpen && (
//         <Signin
//           title="Sign in"
//           description="Please fill out the form below to create an account."
//           onClose={closeModal}
//         />
//       )}

//             <Link href='/dashboard'>
//                 <Button className='bg-black text-white p-5'>To Dashboard</Button>
//             </Link>
//         </div>
//     </div>
//   )
// }






"use client"
import { useState, useEffect } from 'react';
import SearchBar from './Searchbar';
import Signup from '@/app/(routes)/signup/page';
import Signin from '@/app/(routes)/signin/page';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../components/img/Logo.png"
import { Button } from './ui/button';

export default function Nav() {
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

  return (
    <div className="items-center justify-between px-12 py-5 flex mb-3">
      <div>
        <Link href="/">
          <Image src={Logo} alt="logo" width={80} />
        </Link>
      </div>
      <div className="w-[40rem]">
        <SearchBar />
      </div>
      <div className="flex items-center justify-center gap-10">
        <Button onClick={() => openModal('signup')}>Sign Up</Button>
        <Button onClick={() => openModal('signin')}>Sign In</Button>
        {isModalOpen && modalType === 'signup' && <Signup onClose={closeModal} />}
        {isModalOpen && modalType === 'signin' && <Signin onClose={closeModal} />}
        <Link href="/dashboard">
          <Button className="bg-black text-white p-5">To Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}