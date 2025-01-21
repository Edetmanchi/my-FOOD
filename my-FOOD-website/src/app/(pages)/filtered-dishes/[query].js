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











import { useRouter } from "next/navigation";
import { Dishes } from "@/app/data/Resturant_data";
import PopularDishes from "@/components/dashboard/populardishes/PopularDishes";
import Title from "@/components/Title";

const FilteredDishes = () => {
  const router = useRouter();
  const { query } = router.query;

  if (!query) {
    return <div>Loading...</div>;
  }

  // Filter dishes based on title or description
  const filteredDishes = Dishes.filter(
    (dish) =>
      dish.title.toLowerCase().includes(query.toLowerCase()) ||
      dish.description.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredDishes.length === 0) {
    return (
      <div className="p-6">
        <Title title={`No dishes found for "${query}"`} />
        <p>Try searching for something else!</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Title title={`Dishes Related to "${query}"`} />
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {filteredDishes.map((dish) => (
          <PopularDishes
            key={dish.id}
            image={dish.image}
            title={dish.title}
            description={dish.description}
            price={dish.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FilteredDishes;
