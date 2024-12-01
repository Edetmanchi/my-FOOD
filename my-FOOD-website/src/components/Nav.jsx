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










"use client"
import { useState, useEffect } from 'react';
import SearchBar from './Searchbar';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs';

export default function Nav() {
  
  return (
    <div className="items-center justify-between px-12 py-3 flex mb-1">
      <div>
          <Image src='/logo' alt="logo" width={80} height={20}/>
      </div>

      <div>
         <SignedOut>
            <SignInButton/>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
      </div>
    
      <div className="flex items-center justify-center gap-10">
        <Link href="#">
          <Button className='bg-black hover:bg-slate-700 text-white font-bold px-10 py-6 rounded text-lg transition transform hover:scale-105'>To Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}







