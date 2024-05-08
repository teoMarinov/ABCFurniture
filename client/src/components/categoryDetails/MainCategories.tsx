import { useState, useEffect } from "react";
import { request } from "@/utils/axios-helper";
import CategoryContainer from "./CategoryContainer";

export interface CategoryInfoType {
  categoryName: string;
  description: string;
  image: string;
}

const MainCategories = () => {
  const [categoriesIfno, setCategoriesIfno] = useState<CategoryInfoType[]>([]);
  useEffect(() => {
    request("get", "/category/main").then(({ data }) => {
      setCategoriesIfno(data);
    });
  }, []);
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 2xl:w-[90%] w-full 2xl:p-0 px-4">
      {categoriesIfno.map((info) => (
        <CategoryContainer
          key={info.categoryName}
          name={info.categoryName}
          image={info.image}
        />
      ))}
    </div>
  );
};

export default MainCategories;
