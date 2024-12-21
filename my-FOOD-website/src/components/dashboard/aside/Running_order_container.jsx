
import { OrderData } from "@/app/data/Resturant_data";
import Running_order from "./Running_order";
import Tittle from "@/components/Tittle";


const Running_order_container= () => {
  const visibleItems = OrderData.slice(0, 3);

  return (
    <div className=" bg-slate-200 rounded-3xl items-center px-3 py-4">
      <Tittle tittle='Running Orders'/>
      <div className="px-1 py-4 rounded-lg">
        <div className="space-y-4">
          {visibleItems.map((item) => (
            <Running_order
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Running_order_container;

