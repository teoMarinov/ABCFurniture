import { useState, useEffect } from "react";
import { request } from "@/config/axios-helper";

import logo from "@/assets/logo.svg";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import CategoryDisplay from "./CategoryDisplay";

type CategoryInfoType = { name: string; image: string; description: string };

const HomePage = () => {
  const [categoryIfno, setCategoryIfno] = useState<CategoryInfoType[]>([]);

  useEffect(() => {
    request("get", "/category/main").then(({ data }) => {
      setCategoryIfno(data);
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
        {categoryIfno.map((product) => (
          <CategoryDisplay
            key={product.name}
            name={product.name}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
