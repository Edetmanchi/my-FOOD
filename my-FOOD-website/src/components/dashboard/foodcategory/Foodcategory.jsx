
"use client";
import { useState } from "react";
import { Category } from "@/app/data/Resturant_data";
import Food_category_card from "./FoodCategoryContainer";
import Tittle from "@/components/Tittle";

const FoodCategory = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? Category : Category.slice(0, 4);

  return (
    <div className="p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <Tittle tittle='Categories'/>
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="text-blue-500 font-medium"
        >
          {showAll ? "Show Less" : "See More"}
        </button>
      </div>
      <div
        className={`grid gap-4 ${
          showAll
            ? "grid-cols-2 lg:grid-cols-4"
            : "grid-cols-2 lg:grid-cols-4 max-h-72 overflow-y-scroll"
        }`}
      >
        {visibleCategories.map((category) => (
          <Food_category_card
            key={category.id}
            image={category.image}
            title={category.title}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodCategory;
