import { useState, useEffect } from "react";
import { request } from "@/config/axios-helper";
import { productType } from "@/common/types";
import ImageDisplay from "../common/ImageDisplay";

const HomePage = () => {
  const [allProducts, setAllProducts] = useState<productType[]>([]);

  useEffect(() => {
    request("get", "/product/all").then(({ data }) => {
      setAllProducts(data);
    });
  }, []);

  return (
    <div className="flex gap-5 flex-wrap">
      {allProducts.map((product) => (
        <ImageDisplay
          id={product.id}
          name={product.name}
          description={product.description}
          category={product.category}
          sub_category={product.sub_category}
          added_at={product.added_at}
          price={product.price}
          quantity={product.quantity}
          images={product.images}
        />
      ))}
    </div>
  );
};

export default HomePage;
