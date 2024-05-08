import { Camera } from "lucide-react";
import EditCategoryInfoBoxContnet from "./EditCategoryInfoBoxContnet";
interface CategoryInfoBoxProps {
  name?: string;
  description?: string;
  image?: string;
}
const CategoryInfoBox = ({
  name,
  description,
  image,
}: CategoryInfoBoxProps) => {
  return (
    <div className="flex w-[800px] border-2 border-gray-300 mt-5 mb-8 relative">
      <div className="p-5">
        <div className=" h-[150px] min-w-[150px] bg-slate-200 grid place-items-center">
          {image ? <img src={image} className="size-[150px]" /> : <Camera />}
        </div>
      </div>
      <div className="w-full">
        <h1 className="pt-2 pb-3 text-2xl capitalize w-full text-center">
          {name}
        </h1>
        <p>{description}</p>
      </div>

      <div className="relative top-1 right-8">
        <EditCategoryInfoBoxContnet
          description={description}
          image={image}
        />
      </div>
    </div>
  );
};

export default CategoryInfoBox;
