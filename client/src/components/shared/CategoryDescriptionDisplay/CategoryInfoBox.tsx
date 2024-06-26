import { Camera } from "lucide-react";
import EditCategoryInfoBoxContnet from "./EditCategoryInfoBoxContnet";
import FullDesctiptionDialog from "./FullDesctiptionDialog";
import ImageDialog from "./ImageDialog";
interface CategoryInfoBoxProps {
  name?: string;
  description?: string;
  image?: string;
  handleDataChange: (
    name: string,
    description: string,
    image: string
  ) => Promise<void>;
}
const CategoryInfoBox = ({
  name,
  description,
  image,
  handleDataChange,
}: CategoryInfoBoxProps) => {
  return (
    <div className="flex xl:w-3/4 w-full border border-gray-400 my-5 relative ">
      <div className="p-3">
        <div className="h-[200px] min-w-[200px] bg-slate-200 grid place-items-center">
          {image ? <ImageDialog img={image}/> : <Camera />}
        </div>
      </div>
      <div className="w-full h-full overflow-hidden text-justify pr-5">
        <h1 className="pt-2 pb-3 sm:text-2xl text-xl capitalize absolute left-[40%]">
          {name?.replace(/-/g, " ")}
        </h1>
        <div className="mt-12 sm:text-base text-sm h-full line-clamp-6 ">
          <div className="h-fit relative">
            {description && <FullDesctiptionDialog description={description} />}
            {description}
          </div>
        </div>
      </div>

      <div className="relative top-1 right-8">
        <EditCategoryInfoBoxContnet
          name={name!}
          description={description}
          image={image}
          handleDataChange={handleDataChange}
        />
      </div>
    </div>
  );
};

export default CategoryInfoBox;
