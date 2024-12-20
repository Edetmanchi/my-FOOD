

import { OrderData } from "@/app/data/Resturant_data";
import Running_order from "./Running_order";


const Running_order_container= () => {
  const visibleItems = OrderData.slice(0, 3);

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <p className="text-gray-500 mb-4">Order #1 - June 1, 2023, 08:22 AM</p>
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
  );
};

export default Running_order_container;

