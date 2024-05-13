import { Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface ProductDisplayProps {
  id: number;
  image?: string;
  imageTwo?: string;
  name: string;
}
const ProductDisplay = ({ id, image, name }: ProductDisplayProps) => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(`/product/${id}`)}
      className="border-2 shadow-md rounded-md cursor-pointer justify-self-center flex flex-col hover:scale-105 transition"
    >
      {image ? (
        <img src={image} className={"h-96"} />
      ) : (
        <div className="min-h-96 grid place-items-center bg-slate-200">
          <Camera className="size-10 xl:w-[18vw] lg:w-[27.8vw] sm:w-[38vw] w-[60vw]" />
        </div>
      )}
      <div className="grid place-items-center h-12 rounded-b-md text-2xl capitalize justify-self-end">
        <p className="font-serif text">{name?.replace(/-/g, " ")}</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
