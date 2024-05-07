import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { request } from "@/config/axios-helper";
import CategoryDisplay from "./CategoryDisplay";
import { CategoryInfoType } from "./MainCategories";

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

  const [categoryIfno, setCategoryIfno] = useState<FullCategoryInfoType | null>(null);
  console.log("🚀 ~ SubCategories ~ categoryIfno:", categoryIfno?.subcategories)
  useEffect(() => {
    request("get", `/category/${params.category}`).then(({ data }) => {
      setCategoryIfno(data);
    });
  }, [params.category]);
  return (<>{categoryIfno?.categoryName}</>)
};

export default SubCategories;
