import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";

interface CategoryDisplayProps {
  name: string;
  image: string;
}
const CategoryDisplay = ({ name, image }: CategoryDisplayProps) => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(`/products/${name}`)}
      className="border-2 shadow-md rounded-md h-[450px] cursor-pointer "
    >
      <div className="w-full h-[85%]">
        {image ? (
          <img src={image} />
        ) : (
          <div className="size-full grid place-items-center bg-slate-200">
            <Camera className="size-10" />
          </div>
        )}
      </div>
      <div className="grid place-items-center h-[15%] rounded-b-md text-2xl capitalize">
        <p className="font-serif">{name.replace(/-/g, " ")}</p>
      </div>
    </div>
  );
};

export default CategoryDisplay;
