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
    <div className="flex xl:w-[800px] w-full border-2 border-gray-300 mt-5 mb-8 relative rounded-md">
      <div className="p-5">
        <div className=" h-[150px] min-w-[150px] bg-slate-200 grid place-items-center">
          {image ? <ImageDialog img={image}/> : <Camera />}
        </div>
      </div>
      <div className="w-full h-[165px] overflow-hidden text-justify pr-5">
        <h1 className="pt-2 pb-3 text-2xl capitalize absolute left-[47%]">
          {name?.replace(/-/g, " ")}
        </h1>
        <div className="mt-12 sm:text-base text-sm h-full line-clamp-5 ">
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
