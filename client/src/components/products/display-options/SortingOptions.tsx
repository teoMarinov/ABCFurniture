import { useState } from "react";
import { Slider } from "../../ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ListBulletIcon, ViewGridIcon } from "@radix-ui/react-icons";
import OptionSelect from "./OptionSelect";
import SortByOptions from "./SortByOptions";
import NumberDisplayOptions from "./NumberDisplayOptions";
interface SortingOptionsProps {
  handleChange: (val: string) => void;

}
const SortingOptions = ({handleChange}: SortingOptionsProps) => {
  const min = 0;
  const max = 999;
  const [range, setRange] = useState([min, max]);

  // const setHighestPrice = () => {
  //   setRange([range[0], 780]);
  // };
  // const setLowestPrice = () => {
  //   setRange([100, range[1]]);
  // };
  return (
    <div className="py-4 ">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-x-3">
          <ToggleGroup type="single" defaultValue="List">
            <ToggleGroupItem value="List">
              <ListBulletIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="Grid" className="  :bg-red-500">
              <ViewGridIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        a:{range[0]} <br />
        b:{range[1]}
        <Slider
          min={min}
          max={max}
          step={1}
          value={range}
          onValueChange={setRange}
          className="w-80"
        />
        <div className="flex gap-x-10 items-center">
          <OptionSelect title="Sort by" handleChange={handleChange} defaultValue="a-z">
            <SortByOptions />
          </OptionSelect>
          <OptionSelect title="Show" handleChange={handleChange} defaultValue="12">
            <NumberDisplayOptions />
          </OptionSelect>
        </div>
      </div>
    </div>
  );
};

export default SortingOptions;
