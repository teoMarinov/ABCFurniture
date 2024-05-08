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
    <div className="flex xl:w-[800px] w-full border-2 border-gray-300 mt-5 mb-8 relative rounded-md">
      <div className="p-5">
        <div className=" h-[150px] min-w-[150px] bg-slate-200 grid place-items-center">
          {image ? <img src={image} className="size-[150px]" /> : <Camera />}
        </div>
      </div>
      <div className="w-full h-[165px] overflow-hidden text-justify pr-5">
        <h1 className="pt-2 pb-3 text-2xl capitalize absolute left-[47%]">
          {name}
        </h1>
        <p className="mt-12 sm:text-base text-sm ">{description}</p>
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
