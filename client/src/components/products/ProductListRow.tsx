import { Camera, HeartIcon, ShoppingBasket } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductListRowProps {
  id: number;
  image?: string;
  name: string;
  price: number;
  description: string;
}
const ProductListRow = ({
  id,
  image,
  name,
  price,
  description,
}: ProductListRowProps) => {
  const nav = useNavigate();

  const addToFav = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    console.log(id);
  };

  const addToCart = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    console.log(id);
  };
  return (
    <div
      onClick={() => nav(`/product/${id}`)}
      className="border-b border-gray-400 shadow-md cursor-pointer flex transition p-1"
    >
      <div className={"w-80 h-60 bg-red-300 overflow-hidden"}>
        {image ? (
          <img src={image} className="min-h-full min-w-full" />
        ) : (
          <div className="min-h-96 grid place-items-center bg-slate-200">
            <Camera className="size-10 xl:w-[18vw] lg:w-[27.8vw] sm:w-[38vw] w-[60vw]" />
          </div>
        )}
      </div>
      <div className="capitalize w-full flex flex-col justify-between">
        <h1 className="font-serif text-xl px-1 py-2 my-1 border-b border-gray-400">
          {name?.replace(/-/g, " ")}
        </h1>
        <p className="px-3 line-clamp-6 h-full pt-1">{description}</p>
        <div className="flex justify-between pb-2 mt- px-5">
          <p className="text-2xl">{price}€</p>
          <div className="flex mt-2 gap-x-2">
            <HeartIcon
              onClick={addToFav}
              className="mr-2 hover:fill-rose-600/60"
            />
            <ShoppingBasket
              onClick={addToCart}
              className="hover:scale-[115%] transition "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListRow;
