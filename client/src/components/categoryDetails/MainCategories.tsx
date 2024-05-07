import { useState, useEffect } from "react";
import { request } from "@/config/axios-helper";
import CategoryDisplay from "./CategoryDisplay";

export interface CategoryInfoType {
  categoryName: string;
  description: string;
  image: string;
}

const MainCategories = () => {
  const [categoryIfno, setCategoryIfno] = useState<CategoryInfoType[]>([]);
  useEffect(() => {
    request("get", "/category/main").then(({ data }) => {
      setCategoryIfno(data);
    });
  }, []);
  return <CategoryDisplay data={categoryIfno} />;
};

export default MainCategories;
