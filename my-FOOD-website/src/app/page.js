import SearchBar from "@/components/Searchbar";
import { ScrollText } from "lucide-react";
import { Heart } from "lucide-react";
import { PiBowlFood,PiFishLight } from "react-icons/pi";
import { FaPizzaSlice } from "react-icons/fa";
import { GiRoastChicken,GiHamburger} from "react-icons/gi";
import { TbSoupFilled } from "react-icons/tb";
import { GiSandwich } from "react-icons/gi";
import { BsFillCake2Fill } from "react-icons/bs";
import Background from "../components/img/Food-bg.jpg"




export default function Home() {

  return (
    <main className="justify-evenly gap-4 px-6 "> 
        <div
          className=" inset-0 bg-cover bg-center filter blur-lg h-screen" style="background-image:url('../')"
        ></div>

        <div className="flex my-6 gap-10">
          <div className="w-4/6 h-40 bg-slate-400 justify-between shadow-md rounded-tr-full rounded-lg ">
            <div className="items-start justify-center py-10">
              <span className="text-lg font-bold text-slate-900">Hi Edet</span>
              <h1 className="text-3xl">What would you like to eat</h1>
              {/* <h3 className="text-slate-600 text-sm">In just a few clicks, you can get delicious meal close by</h3> */}
              <div className="flex gap-3">
               <Heart />
               <span>Voucher</span>
               <span className="bg-red-600 p-1 rounded ">0</span>
              </div>
              
            </div>
            <SearchBar className='mx-40 shadow-lg'/>
          </div>
          <div className="w-2/6 h-64 bg-slate-100 rounded-lg">
              <h2 className="font-bold py-3 text-slate-800 text-center text-2xl">Your Order</h2>
            {/* <div className="h-40 inset-0 flex justify-center items-center">
             <Image src={Orderbook} alt="Orders" className="text-slate-200"/> 
            </div> */}
          </div>
        </div>
        <div className="flex text-blue-900 items-center justify-between gap-2">
            <PiBowlFood size={40}/>
            <GiHamburger size={40}/>
            <FaPizzaSlice size={40}/>
            <GiRoastChicken size={40}/>
            <PiFishLight size={40}/>
            <TbSoupFilled size={40}/>
            <GiSandwich size={40}/>
            <BsFillCake2Fill size={40}/>
        </div>
    </main>
  );
}
