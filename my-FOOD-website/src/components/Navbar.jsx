import Image from "next/image"
import Link from "next/link"
import { MapPin, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export const Navbar = () => {
  return (
    <div className="bg-slate-200 dark:bg-dark-700 border-b-2 py-3 px-4 flex justify-between">


        <DropdownMenu>
          <DropdownMenuTrigger className='focus:outline-none flex gap-2 items-center'>
             <MapPin />
              <span>Delivered to</span>
              <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href='/Profile'>
                    Area A, Nyanya
                    </Link>
                </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className='focus:outline-none rounded-full p-4 bg-slate-200'>
              <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className='text-black'>ED</AvatarFallback>
              </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href='/Profile'>
                    Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href='/Billings'>
                    Billing
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href='/auth'>
                    Logout
                    </Link>
                </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

    </div>
  )
}
