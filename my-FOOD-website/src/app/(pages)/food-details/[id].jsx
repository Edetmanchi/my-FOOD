import { useRouter } from "next/router";
import FoodDetails from "../../components/FoodDetails";
import { Dishes } from "../../data/RestaurantData";

const FoodDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dish = Dishes.find((dish) => dish.id === parseInt(id));

  return <FoodDetails dish={dish} />;
};

export default FoodDetailsPage;







const FoodDetails = ({ dish }) => {
    if (!dish) return <p>Dish not found</p>;
  
    return (
      <div className="p-6">
        <div className="relative w-full h-64">
          <Image src={dish.image} alt={dish.title} layout="fill" className="rounded-lg" />
        </div>
        <h1 className="text-2xl font-bold mt-4">{dish.title}</h1>
        <p className="text-gray-700 mt-2">{dish.description}</p>
        <span className="text-lg font-semibold mt-4">Price: N {dish.price}</span>
      </div>
    );
  };
