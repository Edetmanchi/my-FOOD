"use client"



import { Copy } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



import SearchBar from "@/components/Searchbar";
 import { ShoppingCart } from "lucide-react";
 import Title from "@/components/Title";
 import {AlertDialog} from "@radix-ui/react-dialog"

import { useState , useEffect, useRef} from "react";
 

 export default function Test() {
   return (
    <div className=" flex flex-row drop-shadow-md bg-gray-200 h-16 py-3x px-5 mt-3 items-center">
        <DeliveryCard/>
        <div className="p-1 drop-shadow-lg shadow-md rounded-md bg-slate-300">
             <ShoppingCart size={34} />
        </div>
    
    </div>
   )
 }
 






 const DeliveryCard = ({ address, fullAddress }) => {
    const [isOpen, setIsOpen] = useState(false);
    const cardRef = useRef(null);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    const handleCancel = () => {
      setIsOpen(false);
      alert('Cancel clicked');
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    return (
      <div className=" mx-auto" ref={cardRef}>
        <div
          className="bg-transparent bg-opacity-80 shadow-lg rounded-lg p-4   cursor-pointer hover:shadow-xl transition-all"
          onClick={toggleAccordion}
        >
          <h2 className="text-lg font-bold text-gray-800">Delivered to</h2>
          <Title title={address}/>
  
          {isOpen && (
            <div className="items-start justify-between gap-10  mt-40 h-35">
                <h2 className="text-lg font-bold text-gray-800">Delivered to</h2>
                <Title title={address}/>
                <div className="flex justify-end space-x-4">
                    <button  className="px-10 py-2 text-xl font-medium text-slate-800 bg-gray-50 rounded-lg hover:bg-gray-100"
                    onClick={handleCancel}>
                    Cancel
                    </button>
                    <button className="px-10 py-2 text-xl font-medium opacity-80 text-white bg-slate-900 rounded-lg hover:bg-slate-950"
                    onClick={() => alert('Edit clicked')}
                    >
                    <DialogCloseButton/>
                    </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };









  export function DialogCloseButton() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Share</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
            <Button type="submit" size="sm" className="px-3">
              <span className="sr-only">Copy</span>
              <Copy />
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }
  