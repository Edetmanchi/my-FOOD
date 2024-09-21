import Image from 'next/image';
import { restaurants } from '@/app/data/Resturants';
export default function AvailableRestaurant({ restaurants = [] }) {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {restaurants.map((restaurant, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-lg w-64 transform transition-transform hover:scale-105 ${restaurant.color} ${restaurant.border} border-4`}
        >
          <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
            <Image 
              src="/Cr" 
              alt={restaurant.name} 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg" 
            />
          </div>
          <h2 className="text-xl font-bold text-white">{restaurant.name}</h2>
          <p className="text-white text-center">{restaurant.description}</p>
        </div>
      ))}
    </div>
  );
}
