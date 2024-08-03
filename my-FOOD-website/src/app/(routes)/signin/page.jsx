"use client"
import React, { useState } from 'react'
import {} from '../../../firebase-config/firebase'
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import { Button } from "@/components/ui/button"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



export default function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signin = async()=>{
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        }catch(err){
         console.error(err)
        }

    }
    const signInWithGoogle = async()=>{
        try{
            await signInWithPopup(auth, googleProvider)
        }catch(err){
         console.error(err)
        }

    }
    const logout= async()=>{
        try{
            await signOut(auth)
        }catch(err){
         console.error(err)
        }

    }
  return (

    <Dialog>
      <DialogTrigger asChild className='px-10 py-3 text-white bg-orange-600 hover:bg-orange-700 text-lg rounded-lg'>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>



//     <div className='border-slate-300 px-7 py-6 flex flex-col'>
//         <input type="email" placeholder='email' className='p-4 ' 
//             onChange={((e) =>setEmail(e.target.value   ))}/>
//         <input type="password" name="password" placeholder="enter password" id=""  className='p-4'
//          onChange={((e) =>setPassword(e.target.value   ))} />

//         <button onClick={signin} className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700">
//             Sign In
//         </button>
//         <button onClick={signInWithGoogle} className="px-4 py-2 font-semibold text-white bg-blue-300 rounded hover:bg-blue-700">
//             Sign-in-with-google
//         </button>



//         <div>
//   <div className="h-screen flex items-center justify-center bg-gray-200">
//     <h1 className="text-6xl font-bold text-blue-500">Welcome to My Landing Page</h1>
//   </div>
//   <section className="h-screen bg-white flex items-center justify-center">
//     <p className="text-4xl">Scroll Down to see the Navbar change color!</p>
//   </section>
// </div>


//     </div>


  ) 
}
