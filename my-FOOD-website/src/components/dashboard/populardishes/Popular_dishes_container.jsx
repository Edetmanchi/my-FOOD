import { PopularDishes } from "@/app/data/Resturant_data";
import Popular_dishes from "./Popular_dishes";
import Tittle from "@/components/Tittle";

const Popular_dishes_container= () => {
  const visibleItems = PopularDishes.slice(0, 6);

  return (
    <div className="px-1 py-4 rounded-lg"
    >
        <Tittle tittle="Popular Dishes"/>
      <div className=" flex-row">
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

