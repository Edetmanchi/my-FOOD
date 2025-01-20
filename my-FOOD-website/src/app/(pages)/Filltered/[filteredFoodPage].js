import { useRouter } from "next/router";
import { AllFoodData } from "../../data/allFoodData";
import FoodDetailsPage from "../dashboard/foodDetails/[foodDetailsPage]";
import Link from "next/link";

const FilteredFoodPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const filteredFoods = AllFoodData().filter(
    (item) => item.category.toLowerCase() === category?.toLowerCase()
  );

  if (!category || filteredFoods.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">No items found for "{category}"</h1>
        <p className="text-gray-500">Try selecting another category.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold capitalize mb-4">
        {category} Dishes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredFoods.map((food) => (
          <Link
            key={food.title}
            href={`/FoodDetailsPage/${food.title.toLowerCase()}`}
            passHref
          >
            <a className="border rounded-lg shadow p-4 block">
              <img
                src={food.image}
                alt={food.title}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold">{food.title}</h3>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FilteredFoodPage;
