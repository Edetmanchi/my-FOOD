

// "use client"
// import Image from "next/image";
// import { Heart } from "lucide-react";
// import { useState } from "react";

// const PopularDishes = ({ image, title, description, price }) => {
//   const [isFavorited, setIsFavorited] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const handleHeartClick = () => {
//     setIsAnimating(true);

//     setIsFavorited((prev) => !prev);
//     // Remove animation class after it completes
//     setTimeout(() => setIsAnimating(false), 400);
//   };

//   return (
//     <>
//       <div className="flex-col justify-between gap-4 px-2 py-3 shadow-slate-500 shadow-md rounded-xl">
//         <div className="h-40 relative">
//           <Image
//             src={image}
//             alt={title}
//             layout="fill"
//             className="rounded-2xl w-48"
//           />
//           <Heart
//             onClick={handleHeartClick}
//             className={`transform transition hover:rotate-360 duration-500 rounded-full p-1 absolute bottom-2 left-2
//               ${isFavorited ? "text-red-500 bg-gray-800" : "text-gray-300 bg-gray-600"}
//               ${isAnimating ? "-translate-y-6" : ""}`}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <div>
//             <h3 className="font-semibold">{title}</h3>
//             <p className="text-gray-500 text-sm">{description}</p>
//           </div>
//           <span className="text-md items-center font-bold">N {price}</span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PopularDishes;





"use client"

import { useRouter } from "next/navigation";
import Image from "next/image";

const PopularDishes = ({ image, description, title, price }) => {
  const router = useRouter();

  const handleDishClick = (categories) => {
    router.push(`/filtered-dishes/${categories.title.lowerCase()}`);
  };

  return (
    <div
      onClick={handleDishClick}
      className="flex-col justify-between gap-4 px-2 py-3 shadow-md rounded-xl cursor-pointer"
    >
      <div className="h-40 relative">
        <Image src={image} alt={title} layout="fill" className="rounded-lg" />
      </div>
      <div className="flex items-center justify-between mt-2">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
        <span className="text-md items-center font-bold">N {price}</span>
      </div>
    </div>
  );
};

export default PopularDishes;
