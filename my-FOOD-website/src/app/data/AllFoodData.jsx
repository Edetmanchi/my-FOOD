import {OrderData, Category, PopularDishes } from "./Resturant_data"


export const AllFoodData =()=>{
  return [
    ...Category, 
    ...PopularDishes, 
    ...OrderData,
  ]
}
