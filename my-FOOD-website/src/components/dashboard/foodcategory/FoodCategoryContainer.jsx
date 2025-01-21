// import Image from "next/image";

// const FoodCategoryContainer = ({image, title }) => {
//   return (
//     <div className="flex-shrink-0 w-44 h-24 mx-1 relative rounded overflow-x-hidden shadow-md">
//       <Image src={image} alt={title} layout="fill" objectFit="fill" />
//       <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white text-sm p-2">
//         {title}
//       </div>
//     </div>
//   );
// };
// export default FoodCategoryContainer;






import { useRouter } from "next/navigation";
import Image from "next/image";



const FoodCategory = ({ image, title }) => {
  const router = useRouter();

  const handleCategoryClick = () => {
    router.push(`/filtered-dishes/${category.title}`);
  };

  return (
    <div
      onClick={handleCategoryClick}
      className="flex-shrink-0 w-44 h-24 mx-1 relative rounded overflow-x-hidden shadow-md cursor-pointer"
    >
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white text-sm p-2">
        {title}
      </div>
    </div>
  );
};

export default FoodCategory;