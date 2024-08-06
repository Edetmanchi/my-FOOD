import { ScrollText } from "lucide-react";
import { Heart } from "lucide-react";
import { PiBowlFood,PiFishLight } from "react-icons/pi";
import { FaPizzaSlice } from "react-icons/fa";
import { GiRoastChicken,GiHamburger} from "react-icons/gi";
import { TbSoupFilled } from "react-icons/tb";
import { GiSandwich } from "react-icons/gi";
import { BsFillCake2Fill } from "react-icons/bs";
import SearchBar from "@/components/Searchbar";




export default function Dashboard() {
  return (
    <main className=" mx-3 mt-10 justify-center flex flex-col">         
        <div className="justify-between items-center w-full space-y-20">
          <div className="flex w-full h-80 gap-8">
            <div className=" flex flex-col w-4/6  bg-slate-50 justify-between  shadow-lg rounded-tr-full rounded-lg p-10 transition transform hover:scale-100 duration-200">
              <div className="items-start justify-center">
                <span className="text-lg font-bold text-slate-900">Hi Edet</span>
                <h1 className="text-3xl font-bold ">What would you like to eat</h1>
                <div className="flex gap3 text-center">
                  <Heart />
                  <span>Voucher</span>
                  <span className="bg-red-600 p-1 rounded ">0</span>
                </div>
                
              </div>
              <div>
                <SearchBar className="w-full"/>
              </div>
            </div>
            <div className="w-2/6  bg-slate-100 rounded-lg shadow-lg transition transform hover:scale-100 duration-200 border-slate-300">
                <h2 className="font-bold py-3 text-slate-800 text-center text-2xl">Your Order</h2>
            </div>
          </div>
          {/* menu icons */}
          <div className="flex text-slate-700 items-center justify-center gap-16 px-5">
            <div className="fflex flex-col justify-center items-center">
              <PiBowlFood size={40} className="transition transform hover:scale-125 duration-300"/>
              Noodles
            </div>
            <div className="fflex flex-col justify-center items-center">
            <GiHamburger size={40} className="transition transform hover:scale-125 duration-300"/>
              Hamburger
            </div>
            <FaPizzaSlice size={40}className="transition transform hover:scale-125 duration-300"/>
            <GiRoastChicken size={40}className="transition transform hover:scale-125 duration-300"/>
            <PiFishLight size={40}className="transition transform hover:scale-125 duration-300"/>
            <TbSoupFilled size={40}className="transition transform hover:scale-125 duration-300"/>
            <GiSandwich size={40}className="transition transform hover:scale-125 duration-300"/>
            <BsFillCake2Fill size={40}className="transition transform hover:scale-125 duration-300"/>
          </div>
        </div>
    </main>
  );
}







// // // Import necessary icons and components
// // import { Heart } from "lucide-react";
// // import { PiBowlFood, PiFishLight } from "react-icons/pi";
// // import { FaPizzaSlice } from "react-icons/fa";
// // import { GiRoastChicken, GiHamburger, GiSandwich } from "react-icons/gi";
// // import { TbSoupFilled } from "react-icons/tb";
// // import { BsFillCake2Fill } from "react-icons/bs";
// // import SearchBar from "@/components/Searchbar";

// // export default function Home() {
// //   return (
// //     <main className="flex flex-col gap-8 p-8 items-center justify-between min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
// //       {/* Main container */}
// //       <div className="flex w-full h-screen justify-center items-center">
// //         <div className="flex w-full h-full justify-between p-8">
// //           {/* Left section */}
// //           <div className="flex flex-col w-2/3 h-full bg-white shadow-lg rounded-tr-full rounded-lg p-8 space-y-6 transition transform hover:scale-105 duration-300">
// //             <div className="flex flex-col items-start justify-center space-y-2">
// //               <span className="text-lg font-bold text-blue-800">Hi Edet</span>
// //               <h1 className="text-4xl font-extrabold text-blue-900">What would you like to eat?</h1>
// //               <div className="flex gap-3 items-center mt-2 text-blue-800">
// //                 <Heart className="text-red-600" />
// //                 <span>Voucher</span>
// //                 <span className="bg-red-600 text-white p-2 rounded">0</span>
// //               </div>
// //             </div>
// //             <div className="flex items-center w-full">
// //               <SearchBar className="w-full shadow-lg" />
// //             </div>
// //           </div>
// //           {/* Right section */}
// //           <div className="w-1/3 h-full bg-white shadow-lg rounded-lg flex flex-col items-center justify-center transition transform hover:scale-105 duration-300">
// //             <h2 className="font-bold py-3 text-blue-800 text-center text-2xl">Your Order</h2>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Icon section */}
// //       <div className="flex w-full justify-around text-blue-800 items-center mt-8 space-x-4">
// //         <PiBowlFood size={50} className="transition transform hover:scale-125 duration-300" />
// //         <GiHamburger size={50} className="transition transform hover:scale-125 duration-300" />
// //         <FaPizzaSlice size={50} className="transition transform hover:scale-125 duration-300" />
// //         <GiRoastChicken size={50} className="transition transform hover:scale-125 duration-300" />
// //         <PiFishLight size={50} className="transition transform hover:scale-125 duration-300" />
// //         <TbSoupFilled size={50} className="transition transform hover:scale-125 duration-300" />
// //         <GiSandwich size={50} className="transition transform hover:scale-125 duration-300" />
// //         <BsFillCake2Fill size={50} className="transition transform hover:scale-125 duration-300" />
// //       </div>
// //     </main>
// // //   );
// // // }


// import React from 'react'
// import Signin from '@/components/auth/Signin'
// import Layout from '@/components/Navbar'
// export default function page() {
//   return (
//     <Layout>

//       <Signin/>
//     </Layout>
//   )
// }
