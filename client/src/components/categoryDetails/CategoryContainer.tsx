import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";

interface CategoryContainerProps {
  name: string;
  image: string;
}
const CategoryContainer = ({ name, image }: CategoryContainerProps) => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(`/products/${name}`)}
      className="border-2 shadow-md rounded-md cursor-pointer justify-self-center flex flex-col"
    >
      {image ? (
        <img src={image} className="h-96" />
      ) : (
        <div className="min-h-96 grid place-items-center bg-slate-200">
          <Camera className="size-10" />
        </div>
      )}
      <div className="grid place-items-center h-12 rounded-b-md text-2xl capitalize">
        <p className="font-serif text">{name?.replace(/-/g, " ")}</p>
      </div>
    </div>
  );
};

export default CategoryContainer;
