'use client'
import { useState } from 'react';
import Modal from '@/components/Modal';
import {auth, googleProvider} from '../../../firebase-config/firebase'
import {signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";

const Signin = ({ onClose }) => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const signIn = async()=>{
    try{
        await signInWithEmailAndPassword(auth,username, email, password)
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

  return (
    <Modal
      title="Sign In"
      description="Please fill out the form below to sign in."
      onClose={onClose}
    >
      <form type='submit' onSubmit={signIn}>
        <div className="mb-3 items-start">
          <label className="block text-slate-500 font-thin">Email</label>
          <input
            type="email"
            value={email}
            placeholder='Enter username or email'
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 rounded bg-slate-200 h-14 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-500 font-thin">Password</label>
          <input
            type="password"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            className="px-2 rounded bg-slate-200 h-14 w-full"
          />
        </div>
        <button
          type="submit"
          className="w-full text-white  rounded-lg hover:bg-slate-900 bg-orange-500 font-bold h-12"
        >
          Sign In
        </button>
      </form>
      <div className="flex flex-col text-center">
          <span>Don't have an account? <Link href='/signup' className="text-orange-500 font-bold">Sign up</Link></span>
          <span className='text-orange-500 text-lg'>OR</span>
          <span className="font-thin text-sm">Log In with</span>
      </div>
      <div className='flex gap-7 mx-auto justify-center my-2'>
          <FcGoogle onClick={signInWithGoogle} size={23} className="transition transform hover:scale-125 duration-300"/>
          <FaApple size={23} className="transition transform hover:scale-125 duration-300"/>
          <FaFacebook size={23} className="transition transform hover:scale-125 duration-300"/>                  
      </div>
    </Modal>
  );
};

export default Signin;