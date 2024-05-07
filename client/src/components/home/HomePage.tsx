import { useRef } from "react";

import logo from "@/assets/logo.svg";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import MainCategories from "../categoryDetails/MainCategories";

const HomePage = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const scrollToDiv = () => {
    divRef.current!.scrollIntoView({ behavior: "smooth" });
  };

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
        <MainCategories />
      </div>
    </div>
  );
};

export default HomePage;
