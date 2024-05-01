import { useState, useEffect } from "react";
import { request } from "@/config/axios-helper";
import { productType } from "@/common/types";

const HomePage = () => {
  
  const [allProducts, setAllProducts] = useState<productType[]>([]);

  useEffect(() => {
    request("get", "/product/all").then(({ data }) => {
      setAllProducts(data);
    });
  }, []);

  return (
    <>
      {allProducts.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </>
  );
};

export default HomePage;
