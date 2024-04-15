import { EuroIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";

const CurrentPrice = () => {
  return (
    <div className="flex items-center justify-center cursor-pointer">
      <p className="text-2xl pb-0.5">123.45</p>
      <EuroIcon className="size-6 ml-1" />
      <ChevronDown className="size-5 ml-1" />
    </div>
  );
};

export default CurrentPrice;
