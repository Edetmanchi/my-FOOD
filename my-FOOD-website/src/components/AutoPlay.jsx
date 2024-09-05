"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image from "next/image";

import Link from "next/link";
function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="s">
      <Slider {...settings}>
        <div className="">
          <Link href="/">
            <div
              className="text-center bg-[#F2F2F2] text-black
             p-4 rounded-lg hover:bg-white transition-all hover:border-primary hover:shadow-md  border shadow-md gap-4  "
            >
              <Image
                src="/images/image-1.png"
                alt=""
                className="max-h-40 block mx-auto relative object-contain top-2 "
                width={400}
                height={400}
              />
              <div className="flex flex-col items-center">
                <h4 className="font-bold my-4 text-xl">
                  Spaghetti + meatballs
                </h4>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font-bold">N3,000</h1>
                <button className="border-orange-600 border p-2 font-medium">
                  Add To Cart
                </button>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex gap-8  ">
          <Link href="/">
            <div
              className="text-center bg-[#F2F2F2]
             p-4 rounded-lg hover:bg-white transition-all hover:border-primary hover:shadow-md  border shadow-md gap-4  "
            >
              <Image
                src="/images/image-2.png"
                alt=""
                className="max-h-40 block mx-auto relative object-contain top-2 "
                width={400}
                height={400}
              />

              <div className="flex flex-col items-center">
                <h4 className="font-bold my-4 text-xl">
                  coconut rice+ Chicken
                </h4>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font-bold">N3,000</h1>
                <button className="border-orange-600 border p-2 font-medium">
                  Add To Cart
                </button>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex gap-8  ">
          <Link href="/">
            <div
              className="text-center bg-[#F2F2F2]
             p-4 rounded-lg hover:bg-white transition-all hover:border-primary hover:shadow-md  border shadow-md gap-4  "
            >
              <Image
                src="/images/image-3.png"
                alt=""
                className="max-h-40 block mx-auto relative object-contain top-2 "
                width={400}
                height={400}
              />

              <div className="flex flex-col items-center">
                <h4 className="font-bold my-4 text-xl">Chicken Burger</h4>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font-bold">N3,000</h1>
                <button className="border-orange-600 border p-2 font-medium">
                  Add To Cart
                </button>
              </div>
            </div>
          </Link>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
