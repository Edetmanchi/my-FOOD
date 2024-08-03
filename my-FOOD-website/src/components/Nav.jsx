import Logo from "../components/img/Logo.png"
import SearchBar from './Searchbar'
import Image from "next/image"
import Link from "next/link"
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
        <div className="flex justify-between items-center gap-10">
            <Dialog>
                <DialogTrigger asChild className='text-orange-600 font-bold hover:bg-slate-200 text-lg px-8 py-6 shadow-lg rounded-lg'>
                    <Button variant="outline">Sign-up</Button>
                </DialogTrigger>
                <DialogContent className=" ">
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
            {/* <Dialog>
                <DialogTrigger asChild className='px-8 py-6 text-white bg-orange-600 hover:bg-orange-700 hover:text-white text-lg rounded-lg'>
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
            </Dialog> */}

        </div>
    </div>
  )
}
