import { EuroIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const CurrentPrice = () => {
  return (
    <HoverCard openDelay={50} closeDelay={50}>
      <HoverCardTrigger asChild>
        <div className="flex items-center justify-center cursor-pointer">
          <p className="text-2xl pb-0.5">123.45</p>
          <EuroIcon className="size-6 ml-1" />
          <ChevronDown className="size-5 ml-1" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        The React Framework – created and maintained by @vercel.
      </HoverCardContent>
    </HoverCard>
  );
};

export default CurrentPrice;
