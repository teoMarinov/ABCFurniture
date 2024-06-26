import { EuroIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface TotalPriceProps {
  nav: (arg: string) => void;
}

const TotalPrice = ({ nav }: TotalPriceProps) => {
  return (
    <HoverCard openDelay={50} closeDelay={50}>
      <HoverCardTrigger asChild onClick={() => nav('/cart')}>
        <div className="flex items-center cursor-pointer ">
          <p className="text-2xl pb-0.5">0.00</p>
          <EuroIcon className="size-6 ml-1" />
          <ChevronDown className="size-5 ml-1" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        Your shopping cart is empty
      </HoverCardContent>
    </HoverCard>
  );
};

export default TotalPrice;
