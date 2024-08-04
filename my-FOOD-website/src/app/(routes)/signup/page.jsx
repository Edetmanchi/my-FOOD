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



export default function Signup() {
  return (
    <div className="flex justify-between items-center">
        <Dialog>
            <DialogTrigger asChild className=' hover:bg-slate-200 px-8 py-6 shadow-lg rounded-lg'>
                <Button className='text-lg font-bold text-orange-600' variant="outline">Sign-up</Button>
            </DialogTrigger>
            <DialogContent className="flex flex-col">
                <div>
                    <Link href='/'>
                        {/* <Image src={Logo} size={20} alt="Logo"/> */}
                    </Link>
                </div>
                <DialogHeader className='items-center justify-center'>
                    <DialogTitle className='font-bolder text-orange-600 text-2xl'>Sign Up</DialogTitle>
                    <DialogDescription className='text-slate-500 text-sm'>
                        Please Sign-up to get started
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-3 mx-24 items-center">
                    {/* name  */}
                    <div className="flex flex-col items-start gap-4">
                        <Label htmlFor="name" className="font-thin">
                            Name
                        </Label>
                        <Input
                            id="name"
                            className="bg-slate-100"
                            placeholder='Name'
                        />
                    </div>
                    {/* email */}   
                    <div className="flex flex-col items-start gap-4">
                        <Label htmlFor="email" className="font-thin">
                            Email
                        </Label>
                        <Input
                            id="email"
                            className="bg-slate-100"
                            placeholder=' Email'
                        />
                    </div>
                    {/* password */}
                    <div className="flex flex-col items-start gap-4">
                        <Label htmlFor="password" className="font-thin">
                            Password
                        </Label>
                        <Input
                            id="password"
                            className="bg-slate-100 py-4"
                            placeholder='password'
                        />
                    </div>
                    {/* confirm password */}
                    <div className="flex flex-col items-start gap-4">
                        <Label htmlFor="confirm password" className="font-thin">
                            Confirm Password
                        </Label>
                        <Input
                            id="confirm-password"
                            className="bg-slate-100 py-4"
                            placeholder='confirm password'
                        />
                    </div>
                    <Button type="submit" className='bg-orange-500 font-bold'>Sign Up</Button>
                    <div className="flex flex-col text-center">
                         <span>Already have an account? <Link href='/signin' className="text-orange-500 font-bold">Log-In</Link></span>
                         <span className='text-orange-500 text-lg'>OR</span>
                         <span className="font-thin text-sm">Sign up with</span>
                    </div>
                </div>
                <DialogFooter className='flex gap-5 mx-auto'>
                    <Link href="/">
                        <FcGoogle size={22} className="transition transform hover:scale-125 duration-300"/>
                    </Link>
                    <Link href="/">
                        <FaApple size={22} className="transition transform hover:scale-125 duration-300"/>
                    </Link>
                    <Link href="/">
                        <FaFacebook size={22} className="transition transform hover:scale-125 duration-300"/>
                    </Link>
                  
                </DialogFooter>
            </DialogContent>
        </Dialog>        
    </div>
  )
}
