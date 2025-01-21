// import { useRouter } from "next/router";
// import { AllFoodData } from "../../data/allFoodData";
// import FoodDetailsPage from "../dashboard/foodDetails/[foodDetailsPage]";
// import Link from "next/link";

// const FilteredFoodPage = () => {
//   const router = useRouter();
//   const { category } = router.query;

//   const filteredFoods = AllFoodData().filter(
//     (item) => item.category.toLowerCase() === category?.toLowerCase()
//   );

//   if (!category || filteredFoods.length === 0) {
//     return (
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-2xl font-bold">No items found for "{category}"</h1>
//         <p className="text-gray-500">Try selecting another category.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold capitalize mb-4">
//         {category} Dishes
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {filteredFoods.map((food) => (
//           <Link
//             key={food.title}
//             href={`/FoodDetailsPage/${food.title.toLowerCase()}`}
//             passHref
//           >
//             <a className="border rounded-lg shadow p-4 block">
//               <img
//                 src={food.image}
//                 alt={food.title}
//                 className="w-full h-32 object-cover rounded-md mb-2"
//               />
//               <h3 className="text-lg font-semibold">{food.title}</h3>
//             </a>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilteredFoodPage;












import { Dishes } from "@/app/data/Resturant_data";
import Image from "next/image";
import { useRouter } from "next/router";

const FilteredDishes = () => {
  const router = useRouter();
  const { query } = router.query;

  const filteredDishes = Dishes.filter(
    (dish) =>
      dish.title.toLowerCase().includes(query.toLowerCase()) ||
      dish.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleDishClick = (id) => {
    router.push(`/food-details/${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dishes Related to "{query}"</h1>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {filteredDishes.map((dish) => (
          <div
            key={dish.id}
            className="shadow-md p-4 rounded cursor-pointer"
            onClick={() => handleDishClick(dish.id)}
          >
            <div className="h-40 relative">
              <Image src={dish.image} alt={dish.title} layout="fill" className="rounded-lg" />
            </div>
            <h3 className="mt-2 font-semibold">{dish.title}</h3>
            <p className="text-gray-500">{dish.description}</p>
            <span className="font-bold">N {dish.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilteredDishes;

