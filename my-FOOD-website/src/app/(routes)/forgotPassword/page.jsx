'use client'
import { useState } from 'react';
import Modal from '@/components/Modal';
import {auth, googleProvider} from '../../../firebase-config/firebase'
import {signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"

const ForgotPassword = ({ onClose }) => {
  const [email, setEmail] = useState("")


    const handlePasswordReset=()=>{

    }
    
  return (
    <Modal
      title="Forgot Password"
      description="Please provide email to reset password."
      onClose={onClose}
    >
      <form type='submit' onSubmit={handlePasswordReset} className='h-96'>
        <div className="mb-7 items-start">
          <label className="block text-slate-700 font-medium py-4">Email</label>
          <input
            type="email"
            value={email}
            placeholder='Enter username or email'
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 rounded bg-slate-200 h-16 w-full"
          />
        </div>
        <button
          type="submit"
          className="w-full text-white text-xl  rounded-lg hover:bg-slate-900 bg-orange-500 font-bold h-16"
        >
          Reset
        </button>
      </form>

    </Modal>
  );
};
export default ForgotPassword;