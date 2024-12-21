import Image from "next/image";

const Popular_dishes = ({ image, title, description, price }) => {
  return (
    <>
    <div className="flex-col items-center gap-4 p-2 border-slate-800 shadow-md rounded-lg">
      <div className="w-16 h-16 relative">
        <Image src={image} alt={title} layout="fill" className="rounded-md" />
      </div>
      <div className="flex">
        <div className="">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-gray-500 text-sm">{description}</p>
        </div>
        <span className="text-lg font-bold">N {price}</span>
      </div>
    </div>
    </>
  );
};

export default Popular_dishes;
