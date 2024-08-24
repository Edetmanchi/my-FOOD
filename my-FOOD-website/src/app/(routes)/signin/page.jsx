'use client'
import { React,useState, useRef } from 'react';
import Modal from '@/components/Modal';
import {auth, googleProvider} from '../../../firebase-config/firebase'
import {signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";



const Signin = ({ onClose }) => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false)
  
  const signIn = async(e)=>{
    e.preventDefault();
    try {jk
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.emailVerified) {
        setError(null);
        router.push('/dashboard');
      } else {
        throw new Error('Email not verified. Please check your inbox.');
      }
    } catch (err) {
      setError(err.message);
    }
  }



  const signInWithGoogle = async()=>{
      try{
          await signInWithPopup(auth, googleProvider)
      }catch(err){
      console.error(err)
      }

  }


    // Prefill the email and password if "Remember Me" was checked before
    useState(() => {
      const savedEmail = localStorage.getItem('email');
      const savedPassword = localStorage.getItem('password');
      if (savedEmail && savedPassword) {
        setEmail(savedEmail);
        setPassword(savedPassword);
        setRememberMe(true);
      }
    }, []);

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
        <div className="flex items-center justify-between mx-1">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2 "
            />
            <label htmlFor="rememberMe" className="text-slate-500 font-thin">Remember Me</label>
          </div>
             <Link href="/forgotPassword" className="text-orange-500 font-thin">Forgot Password?</Link>
        </div>
        <button
          type="submit"
          className="w-full text-white  rounded-lg hover:bg-slate-900 bg-orange-500 font-bold h-12"
        >
          Sign In
        </button>
      </form>
      <div className="flex flex-col text-center">
          <span className='text-slate-600'>Don't have an account? <Link href='/signup' className="text-orange-500 font-semibold px-6">Sign up</Link></span>
          <span className='text-orange-500 text-md'>or</span>
          <span className="font-thin text-sm">Log In with</span>
      </div>
      <div className='flex gap-7 mx-auto justify-center my-2'>
          <FcGoogle onClick={signInWithGoogle} size={23} className="transition transform hover:scale-125 duration-300"/>
          <FaApple size={23} className="transition transform hover:scale-125 duration-300"/>
          <FaFacebook size={23} className="transition transform hover:scale-125 duration-300"/>                  
      </div>
      {/* {error && <p>{email}</p>} */}
    </Modal>
  );
};

export default Signin;
