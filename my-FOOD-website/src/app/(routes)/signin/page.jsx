// "use client"
// import React, { useState } from 'react'
// import {} from '../../../firebase-config/firebase'
// import {createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth"
// import Logo from "../../../components/img/Logo.png"
// import Image from "next/image"
// import Link from "next/link"
// import { FcGoogle } from "react-icons/fc";
// import { FaApple, FaFacebook } from "react-icons/fa";
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"



// export default function Signin() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const signIn = async()=>{
//       try{
//           await createUserWithEmailAndPassword(auth, email, password)
//       }catch(err){
//        console.error(err)
//       }
//   }
//   const signInWithGoogle = async()=>{
//       try{
//           await signInWithPopup(auth, googleProvider)
//       }catch(err){
//        console.error(err)
//       }

//   }






//   return (
//     <div className="flex justify-between items-center">
//         <Dialog>
//             <DialogTrigger asChild className=' hover:bg-orange-600 px-8 py-6 shadow-lg rounded-lg'>
//                 <Button className='text-lg font-bold text-white bg-orange-500' variant="outline">Log In</Button>
//             </DialogTrigger>
//             <DialogContent className=" flex flex-col gap-8 ">
//                 <div>
//                     <Link href='/'>
//                         <Image src={Logo} width={70} alt="Logo"/>
//                     </Link>
//                 </div>
//                 <DialogHeader className='items-center justify-center'>
//                     <DialogTitle className='font-bolder text-orange-600 text-3xl'>Sign In</DialogTitle>
//                     <DialogDescription className='text-slate-500 text-sm'>
//                         Kindly enter your Login details below
//                     </DialogDescription>
//                 </DialogHeader>
//                 <div className="grid gap-4 mx-24 items-center">
//                     <form type='submit'onSubmit={signIn}>
//                         {/* name  */}
//                         <div className="flex flex-col items-start gap-4">
//                             <Label htmlFor="email" className="font-thin">
//                                 Email
//                             </Label>
//                             <Input
//                                 id="name"
//                                 className="bg-slate-100 h-14"
//                                 placeholder='email / username / phone-number'
//                             />
//                         </div>
//                         {/* password */}
//                         <div className="flex flex-col items-start gap-4">
//                             <Label htmlFor="password" className="font-thin">
//                                 Password
//                             </Label>
//                             <Input
//                                 id="password"
//                                 className="bg-slate-100 h-14"
//                                 placeholder='password'
//                             />
//                         </div>
//                         <Button type="submit" className='bg-orange-500 font-bold h-14' >Sign In</Button>
//                     </form>
//                     <div className="flex flex-col text-center">
//                         <span>Don't have an account? <Link href='/signup' className="text-orange-500 font-bold">Sign up</Link></span>
//                         <span className='text-orange-500 text-lg'>OR</span>
//                         <span className="font-thin text-sm">Log In with</span>
//                     </div>
//                 </div>
//                 <DialogFooter className='flex gap-5 mx-auto'>
//                     <FcGoogle onClick={signInWithGoogle} size={22} className="transition transform hover:scale-125 duration-300"/>
//                     <FaApple size={22} className="transition transform hover:scale-125 duration-300"/>
//                     <FaFacebook size={22} className="transition transform hover:scale-125 duration-300"/>                  
//                 </DialogFooter>
//             </DialogContent>
//         </Dialog>        
//     </div>
//   )
// }





const Signin = ({ title, description, onClose }) => {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
        onClick={onClose}
      >
        <div
          className="bg-white w-1/3 p-4 rounded shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">{title}</h2>
            <button onClick={onClose} className="text-gray-500">
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
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="mb-4 text-gray-700">{description}</p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Signin;
