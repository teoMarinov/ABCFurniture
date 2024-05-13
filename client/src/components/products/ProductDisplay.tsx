import { useParams } from "react-router-dom";
import CategoryInfoBox from "../categoryDetails/CategoryInfoBox";
import { useState, useEffect } from "react";
import { productType } from "@/common/types";
import { request } from "@/utils/axios-helper";
import { SubCategoryInfo } from "../categoryDetails/SubCategoriesList";
import CategoryEasyNavigation from "../categoryDetails/CategoryEasyNavigation";
const ProductDisplay = () => {
  const params = useParams();
  const category = params.category;
  const subCategory = params.subcategory;

  const [products, setProducts] = useState<productType[]>([]);
  const [categoryIfno, setCategoryIfno] = useState<SubCategoryInfo | null>(
    null
  );

  useEffect(() => {
    // request("get", `/category/${category}`).then(({ data }) => {
    //   // setCategoryIfno(data);
    //   console.log(data);
    // });
    request("get", `/category/sub/${subCategory}`).then(({ data }) => {
      setCategoryIfno(data);
    });
    request("get", `/product/${subCategory}`).then(({ data }) => {
      setProducts(data);
    });
  }, [category, subCategory]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <CategoryInfoBox
        name={categoryIfno?.subcategoryName}
        description={categoryIfno?.description}
        image={categoryIfno?.image}
      />
      <CategoryEasyNavigation />
      Your products will be here
    </div>
  );
};

export default ProductDisplay;
