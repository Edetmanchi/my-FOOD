// "use client"
// import Link from "next/link"
// import { auth} from "../firebase-config/firebase"
// import { signOut } from "firebase/auth"
// import { useRouter } from "next/navigation"
// import { MapPin, ChevronDown } from "lucide-react"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
//   } from "@/components/ui/dropdown-menu"
//   import { EditAddress } from "./EditAddress"
//   import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
//   } from "@/components/ui/alert-dialog"
  

// export const Navbar = () => {
//   const router = useRouter();

//   const handleNavigation = () => {
//     router.push('/EditAddress');
//   };

//   const logout= async()=>{
//     try{
//         await signOut(auth)
//     }catch(err){
//      console.error(err)
//     }

//   }





//   return (
//     <div className=" border-b-2 py-1 px-4 flex justify-between">
//         <DropdownMenu>
//           <DropdownMenuTrigger className='focus:outline-none flex gap-2 items-center'>
//              <MapPin className="text-slate-900 "/>
//               <span className="text-white font-bold">Delivered to</span>
//               <ChevronDown />
//          </DropdownMenuTrigger>
//           <DropdownMenuContent>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                     <a onClick={handleNavigation}>
//                       Area A, Nyanya
//                     </a>
//                 </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>

//         <DropdownMenu>
//           <DropdownMenuTrigger className='focus:outline-none rounded-full p-2 bg-slate-100'>
//               <Avatar>
//                   <AvatarImage src="https://github.com/shadcn.png" />
//                   <AvatarFallback className='text-black'>ED</AvatarFallback>
//               </Avatar>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent>
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                     <Link href='/Profile'>
//                     Profile
//                     </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                     <Link href='/Billings'>
//                     Billing
//                     </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                     {/* <Link href='/'> */}
//                     <AlertDialog>
//                       <AlertDialogTrigger  onClick={logout}>Logout</AlertDialogTrigger>
//                       <AlertDialogContent>
//                         <AlertDialogHeader>
//                           <AlertDialogTitle>Do you want to Log out?</AlertDialogTitle>
//                           <AlertDialogDescription>
//                             You will be logged out of your account
//                           </AlertDialogDescription>
//                         </AlertDialogHeader>
//                         <AlertDialogFooter>
//                           <AlertDialogCancel>Cancel</AlertDialogCancel>
//                           <AlertDialogAction>Continue</AlertDialogAction>
//                         </AlertDialogFooter>
//                       </AlertDialogContent>
//                     </AlertDialog>
//                     {/* </Link> */}

//                 </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>

//     </div>
//   )
// }











"use client"
import Link from "next/link";
import { auth } from "../firebase-config/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { MapPin, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EditAddress } from "./EditAddress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const Navbar = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/EditAddress');
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="border-b-2 py-1 px-4 flex justify-center items-center  overflow-hidden">
      <DropdownMenu>
        <DropdownMenuTrigger className='focus:outline-none flex gap-2 items-center'>
          <MapPin className="text-slate-900" />
          <span className="text-white font-bold truncate">Delivered to</span>
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
        <DropdownMenuTrigger className='focus:outline-none rounded-full p-2 bg-slate-100'>
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
            <AlertDialog>
              <AlertDialogTrigger onClick={logout}>Logout</AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Do you want to log out?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You will be logged out of your account
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}


















