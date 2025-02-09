import { ScrollText } from "lucide-react";
import Nav from "@/components/Nav";
import SearchBar from "@/components/Searchbar";

import DashHero from "@/components/dashboard/DashHero";
import DashSide from "@/components/dashboard/aside/DashSide";
import FoodCategory from "@/components/dashboard/foodcategory/Foodcategory";
import Popular_dishes_container from "@/components/dashboard/populardishes/PopularDishContainer";
import Test from "../test/page";

export default function Dashboard() {
  return (
    <main className=" mx-2 mt-12 justify-center shadow-slate-400 flex flex-col">         
        <div className="flex gap-4 items-start">
          <div className="w-4/6">
            <DashHero /> 
            <FoodCategory/>
            <Popular_dishes_container/>
          </div>
          <div className="w-2/6 items-start justify-start">
            <DashSide          
            />
          </div>
          {/* menu icons */}
          {/* <div className="flex text-slate-700 items-center justify-center gap-16 px-5">
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
          </div>       */}
        </div>
    </main>
  );
}





