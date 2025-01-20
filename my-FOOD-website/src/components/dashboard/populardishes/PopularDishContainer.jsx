
import { PopularDishes } from "@/app/data/Resturant_data";
import PopularDishes from "./Popular_dishes";
import Tittle from "@/components/Tittle";

const PopularDishContainer = () => {
  const visibleItems = PopularDishes.slice(0, 6);

  return (
    <div className="px-4 py-4">
      <Tittle tittle="Popular Dishes" />
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {visibleItems.map((item) => (
          <Popular_dishes
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular_dishes_container;
