"use client"
import React, { useState } from 'react'
import {} from '../../../firebase-config/firebase'
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import Logo from "../../../components/img/Logo.png"
import Image from "next/image"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Space } from "lucide-react";



export default function ResetPassword() {
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
    <div className="flex justify-between items-center">
        <Dialog>
            <DialogTrigger asChild className=' hover:bg-orange-600 px-8 py-6 shadow-lg rounded-lg'>
                <Button className='text-lg font-bold text-white bg-orange-500' variant="outline">Log In</Button>
            </DialogTrigger>
            <DialogContent className=" flex flex-col gap-8 ">
                <div>
                    <Link href='/'>
                        <Image src={Logo} width={70} alt="Logo"/>
                    </Link>
                </div>
                <DialogHeader className='items-center justify-center'>
                    <DialogTitle className='font-bolder text-orange-600 text-3xl'>Reset Password</DialogTitle>
                    <DialogDescription className='text-slate-500 text-sm'>
                        Reset your password below
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 mx-24 items-center">
                    <div className="flex flex-col items-start gap-4">
                        <Label htmlFor="password" className="font-thin">
                            Password
                        </Label>
                        <Input
                            id="password"
                            className="bg-slate-100 h-14"
                            placeholder='password'
                        />
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <Label htmlFor="password" className="font-thin">
                            Re-type Password
                        </Label>
                        <Input
                            id="re-type-password"
                            className="bg-slate-100 h-14"
                            placeholder='Re-type password'
                        />
                    </div>
                    <Button type="submit" className='bg-orange-500 font-bold h-14'>Sign In</Button> 
                </div>
            </DialogContent>
        </Dialog>        
    </div>
  )
}
