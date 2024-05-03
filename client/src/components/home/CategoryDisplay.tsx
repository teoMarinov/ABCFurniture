import { useNavigate } from "react-router-dom";

interface CategoryDisplayProps {
  name: string;
  image: string;
  description: string;
}
const CategoryDisplay = ({
  name,
  image,
  description,
}: CategoryDisplayProps) => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(`/products/${name}`)}
      className="border-2 shadow-md rounded-md h-[500px] cursor-pointer "
    >
      <div className="w-full h-[85%]">
        {image ? (
          <img src={image} />
        ) : (
          <div className="size-full bg-emerald-50">No image</div>
        )}
      </div>
      <p>{name}</p>
    </div>
  );
};

export default CategoryDisplay;
