import { Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HeartIcon } from "lucide-react";
import { ShoppingBasket } from "lucide-react";
import { useState, useEffect } from "react";
import handleFavorite from "@/utils/handle-favorite";
import clsx from "clsx";
interface ProductDisplayProps {
  id: number;
  image?: string;
  name: string;
  price: number;
}
const ProductDisplay = ({ id, image, name, price }: ProductDisplayProps) => {
  const nav = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoritedIds = JSON.parse(localStorage.getItem("favorited")!) || [];
    setIsFavorite(favoritedIds.includes(id));
  }, [id]);

  const addToFav = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    handleFavorite(id);
    setIsFavorite(!isFavorite);
  };

  const addToCart = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    console.log(id);
  };
  return (
    <div
      onClick={() => nav(`/product/${id}`)}
      className="group border-b border-gray-400 shadow-md cursor-pointer justify-self-center flex flex-col hover:scale-105s transition"
    >
      <div className={"h-60 flex items-center overflow-hidden"}>
        {image ? (
          <img src={image} className="min-h-60 min-w-80" />
        ) : (
          <div className="min-h-96 grid place-items-center bg-slate-200">
            <Camera className="size-10 xl:w-[18vw] lg:w-[27.8vw] sm:w-[38vw] w-[60vw]" />
          </div>
        )}
      </div>
      <div className="relative grid place-items-center h-12 rounded-b-md text-lg capitalize justify-self-end overflow-hidden">
        <p className="font-serif group-hover:-translate-y-9 transition-transform">
          {name?.replace(/-/g, " ")}
        </p>
        <div className="absolute flex justify-between px-5 w-full group-hover:translate-y-0 translate-y-8 transition-transform">
          <p>{price}€</p>
          <div className="flex mt-1">
            <HeartIcon
              onClick={addToFav}
              className={clsx(
                isFavorite && "text-red-600 fill-rose-600",
                "mr-2 hover:fill-rose-600/60"
              )}
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

export default ProductDisplay;
