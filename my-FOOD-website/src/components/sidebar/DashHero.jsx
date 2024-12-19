import React from 'react'

export default function DashHero() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center bg-black text-white p-6 md:p-12">
        {/* Left Section */}
        <div className="flex-1 md:mr-6 text-center md:text-left">
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
        <div className="flex-1 mt-6 md:mt-0">
          <img
            src="path-to-your-image.jpg"
            alt="Delicious Food"
            className="rounded-full shadow-lg object-cover"
          />
        </div>
      </div>      
    </>
  )
}
