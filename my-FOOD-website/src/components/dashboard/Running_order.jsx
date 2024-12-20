import Image from "next/image";

const Running_order = ({ image, title, description, price }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg">
      <div className="w-16 h-16 relative">
        <Image src={image} alt={title} layout="fill" className="rounded-md" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <span className="text-lg font-bold">${price}</span>
    </div>
  );
};

export default Running_order;
