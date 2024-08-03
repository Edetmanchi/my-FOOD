import SearchBar from './Searchbar'
import Signup from "@/app/(routes)/signup/page"
import Signin from '@/app/(routes)/signin/page'
import Image from "next/image"
import Link from "next/link"
import Logo from "../components/img/Logo.png"
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



export default function nav() {
  return (
    <div className='items-center justify-between px-12 py-5 flex mb-3'>
        <div>
            <Link href='/'> 
                <Image src={Logo} alt="logo" width={80} />
            </Link>
        </div>
        <div className="w-[40rem]">
            <SearchBar /> 
        </div>
        
        <div className='flex items-center justify-center gap-10'>
            <Signup/>
            <Signin/>
        </div>
    </div>
  )
}
