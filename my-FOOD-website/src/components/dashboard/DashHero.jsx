import React from 'react'

export default function DashHero() {
  return (
    <>
      <div className="h-full flex flex-col md:flex-row items-center bg-black text-white px-6 py4 md:p-6 rounded-2xl  ">
        {/* Left Section */}
        <div className="md:mr-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome People!
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Enjoy your order with delightful, money-smart dashboard foodie!
          </p>
          <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition">
            Learn More
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className=" md:mt-0">
          <img
            src="/dashimg.png"
            width={300}
            height={100}
            alt="Delicious Food"
            className="rounded-full shadow-lg object-fit"
          />
        </div>
      </div>      
    </>
  )
}
