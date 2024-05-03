import { useState, useEffect } from "react";
import { request } from "@/config/axios-helper";

import logo from "@/assets/logo.svg";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import CategoryDisplay from "./CategoryDisplay";

type CategoryInfoType = {
  category_name: string;
  image: string;
  description: string;
};

const HomePage = () => {
  const [categoryIfno, setCategoryIfno] = useState<CategoryInfoType[]>([]);

  useEffect(() => {
    request("get", "/category/main").then(({ data }) => {
      setCategoryIfno(data);
    });
  }, []);

  return (
    <div className=" flex flex-col items-center w-full">
      <div className="mt-16 font-serif w-full flex flex-col items-center">
        <img src={logo} className="cursor-pointer w-[600px] mb-10" />
        <h1 className="text-7xl mb-10">Everything you need</h1>
        <h3 className="text-5xl">Room by room</h3>
        <DoubleArrowDownIcon className="size-10 my-10" />
      </div>
      <div className="w-full flex justify-center mb-5">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 2xl:w-[90%] w-full 2xl:p-0 px-4">
          {categoryIfno.map((info) => (
            <CategoryDisplay
              key={info.category_name}
              name={info.category_name}
              description={info.description}
              image={info.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
