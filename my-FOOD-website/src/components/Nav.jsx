import SearchBar from './Searchbar'
import Signup from "@/app/(routes)/signup/page"
import Signin from '@/app/(routes)/signin/page'
import Image from "next/image"
import Link from "next/link"
import Logo from "../components/img/Logo.png"
import { Button } from './ui/button'
import {Spinner} from "../components/Spinner"


export default function Nav() {
  return (
    <div className='items-center justify-between px-12 py-5 flex mb-3'>
        <div>
            <Link href='/'> 
                <Image src={Logo} alt="logo" width={80} />
            </Link>
        </div>
        <div className="w-[40rem]">
            <SearchBar /> 
        </div>
        
        <div className='flex items-center justify-center gap-10'>
            <Signup/>
            <Signin/>
            <Link href='/dashboard'>
                <Button className='bg-black text-white p-5'>To Dashboard</Button>
            </Link>
            {/* <Spinner /> */}
        </div>
    </div>
  )
}








// "use client";

// import { ReactNode, useEffect, useState } from "react";

// export default function Layout({ children }: { children: ReactNode }) {
//   const [navbarBg, setNavbarBg] = useState(false);

//   useEffect(() => {
//     const changeBackground = () => {
//       console.log("changeBG");
//       if (window.scrollY >= 80) {
//         setNavbarBg(true);
//       } else {
//         setNavbarBg(false);
//       }
//     };
//     window.addEventListener("scroll", changeBackground);
//     return () => window.removeEventListener("scroll", changeBackground);
//   }, []);

//   return (
//     <>
//       <div
//         className="relative h-[3000px] w-full bg-cover bg-center"
//         style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
//       >
//         <nav
//           className={`fixed w-full z-50  ${
//             navbarBg === true ? "bg-blue-500" : "bg-red-950"
//           }    transition-colors duration-300`}
//         >
//           <div className="container mx-auto flex justify-between items-center p-4">
//             <div className="text-white font-bold text-xl">Logo</div>
//             <div className="flex space-x-4">
//               <button className="text-white border-white border rounded px-4 py-2">
//                 Sign In
//               </button>
//               <button className="text-white border-white border rounded px-4 py-2">
//                 Sign Up
//               </button>
//             </div>
//             <main className="h-full flex flex-col justify-center items-center bg-opacity-50 bg-black text-white">
//               {children}
//             </main>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// }