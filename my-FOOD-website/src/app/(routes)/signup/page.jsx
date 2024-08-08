// "use client"
// import React, { useState } from 'react'
// import {auth, googleProvider} from "../../../firebase-config/firebase"
// import {createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth"
// import Link from "next/link"
// import { useRouter } from 'next/router'
// import { FcGoogle } from "react-icons/fc";
// import { FaApple, FaFacebook } from "react-icons/fa";

// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     useDisclosure,
//     Button,
//     Label,
//     Input
//   } from '@chakra-ui/react'






//  function Signsdsda() {
   

//   return (
//     <div className="flex justify-between items-center">
//         <Dialog>
            
//             <DialogContent className="flex flex-col relative top-1">
//                 <DialogHeader className='items-center justify-center'>
//                     <DialogTitle className='font-bolder text-orange-600 text-2xl'>Sign Up</DialogTitle>
//                     <DialogDescription className='text-slate-500 text-sm'>
//                         Please Sign-up to get started
//                     </DialogDescription>
//                 </DialogHeader>
                        
//                 <DialogFooter className='flex gap-5 mx-auto'>
//                     <button  onClick={handleSignupWithGoogle}>
//                         <FcGoogle size={22} className="transition transform hover:scale-125 duration-300"/>
//                     </button>
//                         <FaApple size={22} className="transition transform hover:scale-125 duration-300"/>
//                         <FaFacebook size={22} className="transition transform hover:scale-125 duration-300"/>                  
//                 </DialogFooter>
//             </DialogContent>
//         </Dialog>        
//     </div>
//   )
// }





// function Sign() {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const [scrollBehavior, setScrollBehavior] = React.useState('inside')

//     const [username, setUsername] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [error, setError] = useState('false')

//     // const router = useRouter();

//     const handleFormSubmit = async (e)=>{
//         e.preventDefault();
//         try{
//             await createUserWithEmailAndPassword(auth, username, email, password);
//         }catch(err){
//             setError(err.message)
//         }
//     }
//     const handleSignupWithGoogle = async ()=>{
//         try{
//             await signInWithPopup(auth, googleProvider)
//         }catch(err){
//             setError(err.message)
//         }
//     }
//     const btnRef = React.useRef(null)


//     return (
//       <>

  

//         <Button mt={3} ref={btnRef} onClick={onOpen}
//          className=' hover:bg-slate-200 px-8 py-6 shadow-lg rounded-lg text-lg font-bold text-orange-600'
//             >
//           Sign-up
//         </Button>
  
//         <Modal
//           onClose={onClose}
//           finalFocusRef={btnRef}
//           isOpen={isOpen}
//           scrollBehavior={scrollBehavior}
//         >
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader className='font-bolder text-orange-600 text-2xl' >Modal Title</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//                 <form onSubmit={handleFormSubmit} type='submit'>
//                     <div className="grid gap-3 mx-24 items-center">
//                         {/* name  */}
//                         <div className="flex flex-col items-start gap-4">
//                             <Label htmlFor="name" className="font-thin">
//                                 Username
//                             </Label>
//                             <Input
//                                 id="name"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 required
//                                 className="bg-slate-100"
//                                 placeholder='username'
//                             />
//                         </div>
//                         {/* email */}   
//                         <div className="flex flex-col items-start gap-4">
//                             <Label htmlFor="email" className="font-thin">
//                                 Email
//                             </Label>
//                             <Input
//                                 id="email"
//                                 value={email}
//                                 onChange={(e)=> setEmail(e.target.value)}
//                                 required
//                                 className="bg-slate-100"
//                                 placeholder=' Email'
//                             />
//                         </div>
//                         {/* password */}
//                         <div className="flex flex-col items-start gap-4">
//                             <Label htmlFor="password" className="font-thin">
//                                 Password
//                             </Label>
//                             <Input
//                                 id="password"
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required          
//                                 className="bg-slate-100 py-4"
//                                 placeholder='password'
//                             />
//                         </div>
//                         {/* confirm password */}
//                         <div className="flex flex-col items-start gap-4">
//                             <Label htmlFor="confirm password" className="font-thin">
//                                 Confirm Password
//                             </Label>
//                             <Input
//                                 id="confirm-password"
//                                 className="bg-slate-100 py-4"
//                                 placeholder='confirm password'
//                             />
//                         </div>
//                         <Button type="submit" className='bg-orange-50 font-bold'>Sign Up</Button>
//                         <div className="flex flex-col text-center">
//                             <span>Already have an account? <Link href='/signin' className="text-orange-500 font-bold">Log-In</Link></span>
//                             <span className='text-orange-500 text-lg'>OR</span>
//                             <span className="font-thin text-sm">Sign up with</span>
//                         </div>
//                     </div>
//                 </form>
//             </ModalBody>
//             <ModalFooter>
//               <button onClick={onClose}>Close</button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       </>
//     )
//   }
































// export default function Signup() {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const [username, setUsername] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [error, setError] = useState('false')
    
//     // const router = useRouter();

//     const handleFormSubmit = async (e)=>{
//         e.preventDefault();
//         try{
//             await createUserWithEmailAndPassword(auth, username, email, password);
//         }catch(err){
//             setError(err.message)
//         }
//     }
//     const handleSignupWithGoogle = async ()=>{
//         try{
//             await signInWithPopup(auth, googleProvider)
//         }catch(err){
//             setError(err.message)
//         }
//     }





//     return (
//       <>
//         <Button onClick={onOpen}>Open Modal</Button>
//         <Modal
//           isCentered
//           onClose={onClose}
//           isOpen={isOpen}
//           motionPreset='slideInBottom'
//         >
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Modal Title</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//                 <form onSubmit={handleFormSubmit} type='submit'>
//                     <div className="grid gap-3 mx-24 items-center">
//                         {/* name  */}
//                         <div className="flex flex-col items-start gap-4">
//                             <span htmlFor="name" className="font-thin">
//                                 Username
//                             </span>
//                             <Input
//                                 id="name"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 required
//                                 className="bg-slate-100"
//                                 placeholder='username'
//                             />
//                         </div>
//                         {/* email */}   
//                         <div className="flex flex-col items-start gap-4">
//                             <Label htmlFor="email" className="font-thin">
//                                 Email
//                             </Label>
//                             <Input
//                                 id="email"
//                                 value={email}
//                                 onChange={(e)=> setEmail(e.target.value)}
//                                 required
//                                 className="bg-slate-100"
//                                 placeholder=' Email'
//                             />
//                         </div>
//                         {/* password */}
//                         <div className="flex flex-col items-start gap-4">
//                             <Label htmlFor="password" className="font-thin">
//                                 Password
//                             </Label>
//                             <Input
//                                 id="password"
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required          
//                                 className="bg-slate-100 py-4"
//                                 placeholder='password'
//                             />
//                         </div>
//                         {/* confirm password */}
//                         <div className="flex flex-col items-start gap-4">
//                             <Label htmlFor="confirm password" className="font-thin">
//                                 Confirm Password
//                             </Label>
//                             <Input
//                                 id="confirm-password"
//                                 className="bg-slate-100 py-4"
//                                 placeholder='confirm password'
//                             />
//                         </div>
//                         <Button type="submit" className='bg-orange-50 font-bold'>Sign Up</Button>
//                         <div className="flex flex-col text-center">
//                             <span>Already have an account? <Link href='/signin' className="text-orange-500 font-bold">Log-In</Link></span>
//                             <span className='text-orange-500 text-lg'>OR</span>
//                             <span className="font-thin text-sm">Sign up with</span>
//                         </div>
//                     </div>
//                 </form>
//             </ModalBody>
//             <ModalFooter>
//               <Button colorScheme='blue' mr={3} onClick={onClose}>
//                 Close
//               </Button>
//               <Button variant='ghost'>Secondary Action</Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       </>
//     )
//   }

























"use client"
import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Sign in:', email, password);
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup