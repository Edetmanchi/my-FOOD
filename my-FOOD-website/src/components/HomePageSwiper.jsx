import Image from "next/image";
import React from "react";

function HomePageSwiper() {
  return (
    <div>
      <div className="text-7xl">Header to be created by Edet</div>
      <hr />
      {/* Hero section */}
      <div className="relative w-screen h-[80vh] overflow-hidden ">
        <Image
          src={"/images/rect.png"}
          alt={"bg-image"}
          height={400}
          width={400}
          className="  w-full h-[70vh] ml-24 absolute inset-0"
        />

        <div className="absolute inset-0 flex  justify-between  text-white ">
          <div className="ml-32 pt-24 pl-8">
            <h1 className="text-4xl font-bold">Good food Delivered To You</h1>
            <p className="mt-4">
              Our Job is to fill your tummy <br /> with delicious food with fast
              <br />
              delivery
            </p>
            <button className=" bg-white text-[#FF7622] px-4 py-2 rounded-md font-bold mt-8">
              Order Now
            </button>
          </div>
          <div className="flex-shrink-0 ">
            <Image
              src={"/images/image-1.png"}
              alt={"food-image"}
              height={400}
              width={400}
              className="mx-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageSwiper;
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// // import { Navigation } from "swiper/modules";
// import "swiper/css/navigation";

// const HomePageSwiper = () => {
//   return (
//     <div className="h-[600px] bg-white">
//       <Swiper
//         loop={true}
//         navigation={true}
//         spaceBetween={0}
//         className="h-[50%]"
//       >
//         <SwiperSlide>
//           <img src={"/images/image-1.png"} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={"/images/image-2.png"} />
//         </SwiperSlide>
//         <SwiperSlide className="bg-black">
//           <img src={"/images/image-3.png"} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={"/images/image-4.png"} />
//         </SwiperSlide>
//       </Swiper>
//       <div className="h-[50%] bg-gradient-to-b from-stone-900" />
//     </div>
//   );
// };

// export default HomePageSwiper;
