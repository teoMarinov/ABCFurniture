import { useState, useEffect } from "react";
import { request } from "@/config/axios-helper";
import { productType } from "@/common/types";
import ImageDisplay from "../common/ImageDisplay";
import logo from "@/assets/logo.svg";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";

const HomePage = () => {
  const [allProducts, setAllProducts] = useState<productType[]>([]);

  useEffect(() => {
    request("get", "/product/all").then(({ data }) => {
      setAllProducts(data);
    });
  }, []);

  return (
    <div className=" flex flex-col items-center">
      <div className="mt-16 font-serif w-full flex flex-col items-center">
        <img src={logo} className="cursor-pointer w-[600px] mb-10" />
        <h1 className="text-7xl mb-10">Everything you need</h1>
        <h3 className="text-5xl">Room by room</h3>
        <DoubleArrowDownIcon className="size-10 my-10" />
      </div>
      <div className="flex gap-10 flex-wrap w-4/5">
        {allProducts.map((product) => (
          <ImageDisplay
            key={product.id}
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
    </div>
  );
};

export default HomePage;
