import { useParams } from "react-router-dom";
import CategoryInfoBox from "../shared/CategoryDescriptionDisplay/CategoryInfoBox";
import { useState, useEffect } from "react";
import { productType } from "@/common/types";
import { request } from "@/utils/axios-helper";
import { SubCategoryInfo } from "../category-details/SubCategoriesList";
import SubCategoryEasyNavigation from "./SubCategoryEasyNavigation";
import ProductDisplay from "./ProductDisplay";
import SortingOptions from "./display-options/SortingOptions";
import PriceRangeSlider from "./PriceRangeSlider";
import ProductListRow from "./ProductListRow";
const ProductsList = () => {
  const params = useParams();
  const category = params.category;
  const subCategory = params.subcategory;

  const [products, setProducts] = useState<productType[]>([]);
  const [categoryIfno, setCategoryIfno] = useState<SubCategoryInfo | null>(
    null
  );
  const [subcategories, setSubcategories] = useState<SubCategoryInfo[]>([]);

  const [sortBy, setSortBy] = useState("a-z");
  const [amountDisplay, setAmountDisplay] = useState("12");
  const [displayStyle, setDisplayStyle] = useState<"list" | "grid">("grid");

  useEffect(() => {
    request("get", `/category/${category}`).then(({ data }) => {
      setSubcategories(data.subcategories);
    });
    request("get", `/category/sub/${subCategory}`).then(({ data }) => {
      setCategoryIfno(data);
    });
  }, [category, subCategory]);

  useEffect(() => {
    request("get", `/product/${subCategory}/${sortBy}/${amountDisplay}`).then(
      ({ data }) => {
        setProducts(data);
      }
    );
  }, [category, sortBy, subCategory, amountDisplay]);

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

  const changeSortOrder = (sort: string) => setSortBy(sort);

  const changeAmountDisplayed = (sort: string) => setAmountDisplay(sort);

  const [priceRange, setPriceRange] = useState([0, 999]);

  return (
    <div className="flex flex-col items-center justify-center w-full mb-10">
      <CategoryInfoBox
        name={categoryIfno?.subcategoryName}
        description={categoryIfno?.description}
        image={categoryIfno?.image}
        handleDataChange={editSubcategoryInfo}
      />
      <div className="flex w-full justify-center gap-x-6 px-4">
        <div>
          <PriceRangeSlider
            min={0}
            max={999}
            range={priceRange}
            setRange={setPriceRange}
          />
          <SubCategoryEasyNavigation
            currentlyOpen={categoryIfno?.subcategoryName}
            category={category!}
            options={subcategories}
          />
        </div>
        <div className="xl:w-3/4 w-full">
          <SortingOptions
            changeSortOrder={changeSortOrder}
            changeAmountDisplayed={changeAmountDisplayed}
            handleToggle={setDisplayStyle}
            currentlySelected={displayStyle}
          />

          {displayStyle === "grid" ? (
            <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 w-full 2xl:p-0 px-4">
              {products.map((product) => (
                <div key={product.id}>
                  <ProductDisplay
                    id={product.id}
                    name={product.name}
                    image={product.images[0]?.url}
                    price={product.price}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id}>
                  <ProductListRow
                    id={product.id}
                    name={product.name}
                    image={product.images[0]?.url}
                    price={product.price}
                    description={product.description}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
