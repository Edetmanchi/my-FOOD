import Image from "next/image";
import React from "react";

const Services = ({ img, button }) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="bg-[#F2F2F2] flex flex-col items-center px-8 pb-20 shadow-sm shadow-black rounded-xl max-w-sm w-full ">
        <div className="w-full flex justify-center mt-10">
          <Image src={img} height={200} width={200} className="object-cover" />
        </div>

        <div className="text-white font-bold  text-center bg-black px-16 py-1 rounded-tr-2xl object-contain mt-10 -mb-16 ">
          {button}
        </div>
      </div>
    </div>
  );
};
export default Services;
