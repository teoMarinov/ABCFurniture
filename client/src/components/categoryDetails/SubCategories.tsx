import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { request } from "@/config/axios-helper";
import { CategoryInfoType } from "./MainCategories";
import CategoryContainer from "./CategoryContainer";
import CategoryInfoBox from "./CategoryInfoBox";

export type SubCategoryInfo = {
  subcategory_name: string;
  description: string;
  image: string;
};

interface FullCategoryInfoType extends CategoryInfoType {
  subcategories: SubCategoryInfo[];
}

const SubCategories = () => {
  const params = useParams();

  const [categoryIfno, setCategoryIfno] = useState<FullCategoryInfoType | null>(
    null
  );

  useEffect(() => {
    request("get", `/category/${params.category}`).then(({ data }) => {
      setCategoryIfno(data);
    });
  }, [params.category]);
  return (
    <div className="w-full flex flex-col items-center">
      <CategoryInfoBox
        name={categoryIfno?.categoryName}
        description={categoryIfno?.description}
        image={categoryIfno?.image}
      />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 2xl:w-[90%] w-full 2xl:p-0 px-4">
        {categoryIfno?.subcategories.map((info) => (
          <CategoryContainer
            key={info.subcategory_name}
            name={info.subcategory_name}
            image={info.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SubCategories;
