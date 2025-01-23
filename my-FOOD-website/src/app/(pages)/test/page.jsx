"use client"

import SearchBar from "@/components/Searchbar";
 import { ShoppingCart } from "lucide-react";
 import Title from "@/components/Title";
import ProfileDropdown from "@/components/ProfileDropdown"

import React,{ useState , useEffect, useRef} from "react";
 

 export default function Test() {
   return (
    <div className=" flex flex-row drop-shadow-xl bg-gray-100 hover:bg-gray-200 h-[4.3rem] py-3x px-5 mt-3 items-center">
        <AddressCard/> 
        <div className="gap-3 flex">
          <ShoppingCart className="p-3 shadow-lg rounded-md drop-shadow-lg bg-gray-300" size={45}/>
          <ProfileDropdown/>
        </div>

    
    </div>
   )
 }
 




 const AddressCard = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [address, setAddress] = useState("Enter Delivery Address");
    const [isOpen, setIsOpen] = useState(false);
    const cardRef = useRef(null);


    const handleEdit = () => {
      setIsDialogOpen(true);
    };
  
    const handleSave = (newAddress) => {
      setAddress(newAddress);
      setIsDialogOpen(false);
    };
  
    const handleClose = () => {
      setIsDialogOpen(false);
    };
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsOpen(false);
      }
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
          className="relative bg-gray-100 bg-opacity-80 shadow-lg rounded-lg  px-4 w-56 h-14  cursor-pointer hover:shadow-xl transition-all"
          onClick={toggleAccordion}
        >
          <h2 className="text-md font-semibold text-gray-800">Delivered to:</h2>
          <Title title={address}/>
  
          {isOpen && (
            <div className="absolute top-1 w-56  px-3 py-3 items-start justify-evenly drop-shadow-lg rounded-md gap-10 bg-gray-200">
                <h2 className="text-lg font-bold text-gray-800">Delivered to</h2>
                <Title title={address}/>
                <div className="flex space-x-4">
                    <button  className="px-4 py-1 w-24 text-sm font-medium text-slate-800 border-slate-500 rounded-lg hover:bg-gray-200"
                    onClick={handleClose}>
                    Cancel
                    </button>
                    <button className="px-4 py-1 w-24 text-sm font-medium text-white bg-slate-800 rounded-lg hover:bg-slate-900"
                    onClick={handleEdit}
                    >
                      Edit
                    </button>
              </div>
            </div>
          )}
        </div>

        <AlertDialog
        isOpen={isDialogOpen}
        onClose={handleClose}
        onSave={handleSave}
      />
      </div>
    );
  };


  const AlertDialog = ({ isOpen, onClose, onSave }) => {
    const [inputAddress, setInputAddress] = useState("");
    const dialogRef = useRef(null);

    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    React.useEffect(() => {
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
      <div className=" inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
        <div
          ref={dialogRef}
          className="absolute mt-14 bg-white rounded-lg shadow-lg px-8  w-full max-w-sm"
        >
          <h2 className="text-lg font-bold text-gray-800">Delivered to:</h2>
          <p className="text-sm text-gray-600 mt-2">Please enter an address we can deliver to.</p>
          <input
            type="text"
            placeholder="Enter address"
            value={inputAddress}
            onChange={(e) => setInputAddress(e.target.value)}
            className="w-full mt-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-300"
          />
          <div className="flex justify-end space-x-4 my-4">
            <button
              className="px-3 py-2 w-24 text-sm font-medium text-slate-600 border rounded-lg hover:bg-gray-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-3 w-24 py-2 text-sm font-medium text-white bg-slate-700 rounded-lg hover:bg-slate-800"
              onClick={() => onSave(inputAddress)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  };