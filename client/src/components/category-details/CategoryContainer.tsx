import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";

interface CategoryContainerProps {
  name: string;
  image: string;
  navPath: string;
}
const CategoryContainer = ({ name, image, navPath}: CategoryContainerProps) => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(`${navPath}${name}`)}
      className="border-b border-gray-400 rounded-md cursor-pointer justify-self-center flex flex-col hover:scale-105 transition"
    >
      {image ? (
        <img src={image} className="h-96" />
      ) : (
        <div className="min-h-96 grid place-items-center bg-slate-200">
          <Camera className="size-10 xl:w-[18vw] lg:w-[27.8vw] sm:w-[38vw] w-[60vw]" />
        </div>
      )}
      <div className="grid place-items-center h-12 rounded-b-md text-2xl capitalize">
        <p className="font-serif text">{name?.replace(/-/g, " ")}</p>
      </div>
    </div>
  );
};

export default CategoryContainer;
