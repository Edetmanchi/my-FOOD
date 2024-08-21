'use client'
import { useState } from 'react';
import Modal from '@/components/Modal';
import {useRouter} from 'next/navigation'
import {auth, googleProvider} from '../../../firebase-config/firebase'
import {createUserWithEmailAndPassword,signInWithPopup, sendEmailVerification} from "firebase/auth"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";

const Signup = ({ onClose }) => {
    const router = useRouter();
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [error, setError] = useState('null')


    const handleFormSubmit = async (e)=>{
      e.preventDefault();
      try {
        const userCredential = await createUserWithEmailAndPassword(auth,username, email, password);
        await sendEmailVerification(userCredential.user);
        setMessage('A verification email has been sent to your email address. Please verify before signing in.');
        setError(null);
        router.push('/signin');
      } catch (err) {
        setError(err.message);
        setMessage('');
      }
    };

    const handleSignupWithGoogle = async ()=>{
        try{
            await signInWithPopup(auth, googleProvider)
            router.push('/dashboard')
        }catch(err){
            setError(err.message)
        }
    }


  

  return (
    <Modal
      title="Sign Up"
      description="Please fill out the form below to create an account."
      onClose={onClose}
    >
      <form type='submit' onSubmit={handleFormSubmit}>
        <div className="mb-3 items-start">
          <label className="block text-slate-500 font-thin">Username</label>
          <input
            type="text"
            value={username}
            placeholder='What can we call you'
            onChange={(e) => setUsername(e.target.value)}
            className="px-2 rounded bg-slate-200 h-12 w-full"
          />
        </div>
        <div className="mb-3 items-start">
          <label className="block text-slate-500 font-thin">Email</label>
          <input
            type="email"
            value={email}
            placeholder='Enter username or email'
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 rounded bg-slate-200 h-12 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-500 font-thin">Password</label>
          <input
            type="password"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            className="px-2 rounded bg-slate-200 h-12 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-500 font-thin">Confirm Password</label>
          <input
            type="password"
            value={cpassword}
            placeholder='Confirm Password'
            onChange={(e) => setCpassword(e.target.value)}
            className="px-2 rounded bg-slate-200 h-12 w-full"
          />
        </div>
        <button
          type="submit"
          className="w-full text-white  rounded-lg hover:bg-slate-900 bg-orange-500 font-bold h-10"
        >
          Sign Up
        </button>
        {/* <div className='h-12 w-12'>

            <Spinner size='xl' />
        </div> */}

        {error && <p>Invalid user credentials</p>}
      </form>
      <div className="flex flex-col text-center">
          <span>Have an account already? <Link href='/signin' className="text-orange-500 font-bold">Log in</Link></span>
          <span className='text-orange-500 text-lg'>OR</span>
          <span className="font-thin text-sm">Sign up with</span>
      </div>
      <div className='flex gap-7 mx-auto justify-center my-2'>
        <button onClick={handleSignupWithGoogle}>

          <FcGoogle size={23} className="transition transform hover:scale-125 duration-300"/>
        </button>
          <FaApple size={23} className="transition transform hover:scale-125 duration-300"/>
          <FaFacebook size={23} className="transition transform hover:scale-125 duration-300"/>                  
      </div>
    </Modal>
  );
};

export default Signup;

