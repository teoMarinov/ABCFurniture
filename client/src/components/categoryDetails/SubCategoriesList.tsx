import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { request } from "@/utils/axios-helper";
import { CategoryInfoType } from "./MainCategoriesList";
import CategoryContainer from "./CategoryContainer";
import CategoryInfoBox from "./CategoryInfoBox";
import CategoryEasyNavigation from "./CategoryEasyNavigation";

export type SubCategoryInfo = {
  subcategoryName: string;
  description: string;
  image: string;
};

interface SubCategoriesList extends CategoryInfoType {
  subcategories: SubCategoryInfo[];
}

const SubCategoriesList = () => {
  const params = useParams();

  const [categoryIfno, setCategoryIfno] = useState<SubCategoriesList | null>(
    null
  );

  useEffect(() => {
    request("get", `/category/${params.category}`).then(({ data }) => {
      setCategoryIfno(data);
    });
  }, [params.category]);
  return (
    <div className="w-full flex flex-col items-center mb-9">
      <CategoryInfoBox
        name={categoryIfno?.categoryName}
        description={categoryIfno?.description}
        image={categoryIfno?.image}
      />
      <div className="flex w-full justify-center">
        <CategoryEasyNavigation currentlyOpen={categoryIfno?.categoryName}/>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-4 2xl:w-3/4 w-full 2xl:p-0 px-4">
          {categoryIfno?.subcategories.map((info) => (
            <CategoryContainer
              key={info.subcategoryName}
              name={info.subcategoryName}
              image={info.image}
              navPath=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubCategoriesList;
