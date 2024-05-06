import { useState, useEffect, useRef } from "react";
import { request } from "@/config/axios-helper";

import logo from "@/assets/logo.svg";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import CategoryDisplay from "./CategoryDisplay";

type CategoryInfoType = {
  categoryName: string;
  image: string;
  description: string;
};

const HomePage = () => {
  const [categoryIfno, setCategoryIfno] = useState<CategoryInfoType[]>([]);
  const divRef = useRef<HTMLDivElement>(null);

  const scrollToDiv = () => {
    divRef.current!.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    request("get", "/category/main").then(({ data }) => {
      setCategoryIfno(data);
    });
  }, []);

  return (
    <div className=" flex flex-col items-center w-full">
      <div className="mt-16 font-serif w-full flex flex-col items-center">
        <img src={logo} className="cursor-pointer w-[600px] mb-10" />
        <h1 className="text-7xl mb-10 text-center">Everything you need</h1>
        <h3 className="text-5xl">Room by room</h3>
        <DoubleArrowDownIcon
          onClick={scrollToDiv}
          className="size-10 my-10 cursor-pointer rounded-full"
        />
      </div>
      <div ref={divRef} className="w-full flex justify-center mb-4">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 2xl:w-[90%] w-full 2xl:p-0 px-4">
          {categoryIfno.map((info) => (
            <CategoryDisplay
              key={info.categoryName}
              name={info.categoryName}
              image={info.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
