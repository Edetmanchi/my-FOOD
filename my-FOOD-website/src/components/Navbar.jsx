"use client"
import Link from "next/link"
// import { useRouter } from "next/router"
import { useRouter } from "next/navigation"
import { MapPin, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { EditAddress } from "./EditAddress"

export const Navbar = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/EditAddress');
  };
  return (
    <div className="bg-slate-500 dark:bg-dark-700 border-b-2 py-1 px-4 flex justify-between z-10">
        <DropdownMenu>
          <DropdownMenuTrigger className='focus:outline-none flex gap-2 items-center'>
             <MapPin className="text-slate-900 "/>
              <span className="text-white font-bold">Delivered to</span>
              <ChevronDown />
         </DropdownMenuTrigger>
          <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <a onClick={handleNavigation}>
                      Area A, Nyanya
                    </a>
                </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className='focus:outline-none rounded-full p-4 bg-slate-200'>
              <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className='text-black'>ED</AvatarFallback>
              </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href='/Profile'>
                    Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href='/Billings'>
                    Billing
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href='/auth'>
                    Logout
                    </Link>
                </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

    </div>
  )
}









// 'use client'
// import { useEffect, useState } from "react";

// export default function Layout({ children }) {
//   const [navbarBg, setNavbarBg] = useState(false);

//   useEffect(() => {
//     const changeBackground = () => {
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
//     <div className="relative h-screen w-full bg-cover bg-center">
//       <nav className={`fixed w-full z-50 ${navbarBg ? "bg-blue-500" : "bg-transparent"} transition-colors duration-300`}>
//         <div className="container mx-auto flex justify-between items-center p-4">
//           <div className="text-white font-bold text-xl">Logo</div>
//           <div className="flex space-x-4">
//             <button className="text-white border-white border rounded px-4 py-2">Sign In</button>
//             <button className="text-white border-white border rounded px-4 py-2">Sign Up</button>
//           </div>
//         </div>
//       </nav>
//       <div className="h-full flex flex-col justify-center items-center bg-opacity-50 bg-black text-white">
//         {/* {children} */}
//       </div>
//     </div>
//   );
// }









