import Image from "next/image";
import React from "react";

const WhyChooseUs = ({ header, img, description }) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="bg-white flex flex-col items-center px-8 pb-20 shadow-sm shadow-black rounded-xl max-w-sm w-full">
        <div className="w-full flex justify-center">
          <Image
            src={img}
            height={200}
            width={200}
            className="object-cover h-20 w-20"
          />
        </div>
        <div className="font-bold text-xl  text-center mt-4">{header}</div>
        <div className="text-[#3C3B39] font-semibold mt-12 text-center text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
