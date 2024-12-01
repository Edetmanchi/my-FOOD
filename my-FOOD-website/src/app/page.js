"use client"
import React, { useState, useEffect, useMemo } from 'react'
import useMeasure from 'react-use-measure'
import { useTransition, a } from '@react-spring/web'
import shuffle from 'lodash.shuffle'

import useMedia from './useMedia'
import data from './data'

import styles from './styles.module.css'
// import { Mandali } from 'next/font/google'

function Masonry() {
  // Hook1: Tie media queries to the number of columns
  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)
  // Hook2: Measure the width of the container element
  const [ref, { width }] = useMeasure()
  // Hook3: Hold items
  const [items, set] = useState(data)
  // Hook4: shuffle data every 2 seconds
  useEffect(() => {
    const t = setInterval(() => set(shuffle), 2000)
    return () => clearInterval(t)
  }, [])
  // Hook5: Form a grid of stacked items using width & columns we got from hooks 1 & 2
  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
    let gridItems = items.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const x = (width / columns) * column // x = container width / number of columns * column index,
      const y = (heights[column] += child.height / 2) - child.height / 2 // y = it's just the height of the current column
      return { ...child, x, y, width: width / columns, height: child.height / 2 }
    })
    return [heights, gridItems]
  }, [columns, items, width])
  // Hook6: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, {
    key: (item) => item.css,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  })
  // Render the grid
  return (
    <div ref={ref} className={styles.list} style={{ height: Math.max(...heights) }}>
      {transitions((style, item) => (
        <a.div style={style}>
          <div style={{ backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)` }} />
        </a.div>
      ))}
    </div>
  )
}

export default function page() {
  return (
    < Masonry/>
  )
}


































// import HomePageSwiper from "@/components/HomePageSwiper";
// import WhyChooseUs from "@/components/WhyChooseUsCard";
// import SearchBar from "@/components/Searchbar";
// import CuisineCard from "@/components/CuisineCard";
// import AutoPlay from "@/components/AutoPlay";
// import Services from "@/components/Services";
// import { FaGooglePlay } from "react-icons/fa6";
// import { FaApple } from "react-icons/fa";
// import Image from "next/image";
// export default function Page() {
//   return (
//     <>
//       {/* <div> */}
//         <HomePageSwiper />
//         <div className="bg-[#FF7622] pt-10 px-20 h-[80vh] ">
//           <h1 className="text-[#3E3C39] font-bold text-4xl text-center mb-10">
//             Why Choose Us?
//           </h1>
//           <div className="  flex gap-8 items-center ">
//             <div className="flex ">
//               <Image
//                 src={"/images/female-chef.png"}
//                 alt={"food-image"}
//                 height={200}
//                 width={200}
//                 className="h-32 w-28 object-contain -mr-20 -mt-10 z-10"
//               />
//               <WhyChooseUs
//                 img={"/images/easy-order-icon.jpg"}
//                 header={"Easy to order"}
//                 description={
//                   "We allow you to choose your order and we deliver quality food"
//                 }
//               />
//             </div>

//             <div className="w-1/3">
//               {" "}
//               <WhyChooseUs
//                 img={"/images/secure-payment-icon.png"}
//                 header={"Secure payment"}
//                 description={
//                   "Easy and smooth payment options for easy customer service"
//                 }
//               />
//             </div>
//             <div className="flex w-1/3">
//               <div className="relative">
//                 <WhyChooseUs
//                   img={"/images/fast-delivery-icon.png"}
//                   header={"Fast delivery"}
//                   description={
//                     "Your order is just a step away because we deliver fast and on time."
//                   }
//                 />
//                 <Image
//                   src={"/images/message.png"}
//                   alt={"message-icon"}
//                   height={200}
//                   width={200}
//                   className="h-16 w-16 object-contain absolute bottom-0 right-0  -mr-4 z-10"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* end of why choose us */}
//         <div className="flex justify-between mt-20 mx-16">
//           <h1 className="text-4xl font-bold">
//             Diverse <span className="text-[#FF7622]">Cuisine</span> Selection
//           </h1>
//           <button className="bg-[#FF7622] text-white px-4 py-2 rounded-md font-bold">
//             More Details
//           </button>
//         </div>
//         <div className="mt-8">
//           <AutoPlay />
//         </div>
//         <div className="flex justify-center mt-20">
//           <Image
//             src={"/images/female-chef.png"}
//             alt={"cheff"}
//             height={200}
//             width={200}
//             className="object-cover w-16 h-16 -mt-6 "
//           />
//           <h1 className="text-4xl font-bold ">How To Order</h1>
//         </div>
//         <div className="m-10">
//           <Image
//             src={"/images/stages.png"}
//             alt={"banner"}
//             height={200}
//             width={200}
//             className=" w-full object-cover"
//           />
//         </div>
//         <div className="flex justify-between items-center m-20">
//           <div className="">
//             <h1 className="text-4xl font-bold">
//               <span className="text-[#3A8700] ">Download</span> Our Mobile App
//             </h1>
//             <p className="text-sm text-center mt-2">We’re available for both</p>
//             <div className="flex items-center gap-6 justify-center mt-12">
//               <button className="bg-black text-white flex gap-2 items-center rounded-md px-2">
//                 <FaGooglePlay className="w-6 h-6" />
//                 <div>
//                   <p className="text-xs text-start">GET IT ON</p>
//                   <h1 className="font-semibold text-md">Google Play</h1>
//                 </div>
//               </button>
//               <button className="bg-black text-white flex gap-2 items-center rounded-md px-2">
//                 <FaApple className="w-8 h-8" />
//                 <div>
//                   <p className="text-xs text-start">Download on the </p>
//                   <h1 className="font-semibold text-md text-start">App Store</h1>
//                 </div>
//               </button>
//             </div>
//           </div>
//           <Image
//             src={"/images/phones.png"}
//             alt={"phone"}
//             height={200}
//             width={200}
//             className="object-cover w-80 h-80"
//           />
//         </div>

//         <h1 className="text-center text-4xl font-bold mt-12 text-black">
//           Our Best Services
//         </h1>
//         <div className="flex gap-12 m-10 justify-center ">
//           <Services img={"/images/image-2.png"} button={"Food"} />
//           <Services img={"/images/drinks.png"} button={"Drinks"} />
//           <Services img={"/images/image-3.png"} button={"Drinks"} />
//         </div>
//         <Image
//           src={"/images/banner.png"}
//           alt={"banner"}
//           height={200}
//           width={200}
//           className=" w-full object-cover  p-20"
//         />
//       {/* </div> */}
//     </>
//   );
// }

