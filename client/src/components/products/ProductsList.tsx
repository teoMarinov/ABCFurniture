import { useParams } from "react-router-dom";
import CategoryInfoBox from "../shared/CategoryDescriptionDisplay/CategoryInfoBox";
import { useState, useEffect } from "react";
import { productType } from "@/common/types";
import { request } from "@/utils/axios-helper";
import { SubCategoryInfo } from "../categoryDetails/SubCategoriesList";
import SubCategoryEasyNavigation from "./SubCategoryEasyNavigation";
import ProductDisplay from "./ProductDisplay";
import SortingOptions from "./SortingOptions";
const ProductsList = () => {
  const params = useParams();
  const category = params.category;
  const subCategory = params.subcategory;

  const [products, setProducts] = useState<productType[]>([]);
  const [categoryIfno, setCategoryIfno] = useState<SubCategoryInfo | null>(
    null
  );
  const [subcategories, setSubcategories] = useState<SubCategoryInfo[]>([]);

  useEffect(() => {
    request("get", `/category/${category}`).then(({ data }) => {
      setSubcategories(data.subcategories);
    });
    request("get", `/category/sub/${subCategory}`).then(({ data }) => {
      setCategoryIfno(data);
    });
    request("get", `/product/${subCategory}`).then(({ data }) => {
      setProducts(data);
    });
  }, [category, subCategory]);

  const editSubcategoryInfo = async (
    name: string,
    description: string,
    image: string
  ) => {
    request("put", `/category/sub/${name}`, {
      description,
      image,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mb-10">
      <CategoryInfoBox
        name={categoryIfno?.subcategoryName}
        description={categoryIfno?.description}
        image={categoryIfno?.image}
        handleDataChange={editSubcategoryInfo}
      />
      <div className="flex w-full justify-center gap-x-4 px-4">
        <SubCategoryEasyNavigation
          currentlyOpen={categoryIfno?.subcategoryName}
          category={category!}
          options={subcategories}
        />
        <div className="xl:w-3/4">
          <SortingOptions />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-full 2xl:p-0 px-4">
            {products.map((product) => (
              <div key={product.id}>
                <ProductDisplay
                  id={product.id}
                  name={product.name}
                  image={product.images[0]?.url}
                  imageTwo={product.images[1]?.url}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
