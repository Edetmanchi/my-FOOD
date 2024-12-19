import { ScrollText } from "lucide-react";
import { Heart } from "lucide-react";
import { PiBowlFood,PiFishLight } from "react-icons/pi";
import { FaPizzaSlice } from "react-icons/fa";
import { GiRoastChicken,GiHamburger} from "react-icons/gi";
import { TbSoupFilled } from "react-icons/tb";
import { GiSandwich } from "react-icons/gi";
import { BsFillCake2Fill } from "react-icons/bs";
import SearchBar from "@/components/Searchbar";

import DashHero from "@/components/sidebar/DashHero";
import AvailableRestaurant from "@/components/AvailableResturant";




export default function Dashboard() {
  return (
    <main className=" mx-3 mt-10 justify-center flex flex-col">         
        <div className="justify-between items-center w-full space-y-20">
          <div className="flex w-full h-80 gap-8">
            <DashHero

            />
            
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





