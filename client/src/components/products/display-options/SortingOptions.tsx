import { useState } from "react";
import { Slider } from "../../ui/slider";

import OptionSelect from "./OptionSelect";
import SortByOptions from "./SortByOptions";
import AmountDisplayedOptions from "./AmountDisplayedOptions";
import ToggleView from "./ToggleView";
interface SortingOptionsProps {
  changeSortOrder: (val: string) => void;
  changeAmountDisplayed: (val: string) => void;
  handleToggle: (val: "grid" | "list") => void;
  currentlySelected: "grid" | "list";
}
const SortingOptions = ({
  changeSortOrder,
  changeAmountDisplayed,
  handleToggle,
  currentlySelected,
}: SortingOptionsProps) => {
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

        <ToggleView selected={currentlySelected} handleToggle={handleToggle} />
        {/* <Slider
          min={min}
          max={max}
          step={1}
          value={range}
          onValueChange={setRange}
          className="w-80"
        /> */}
        <div className="flex gap-x-10 items-center">
          <OptionSelect
            title="Sort by"
            handleChange={changeSortOrder}
            defaultValue="a-z"
          >
            <SortByOptions />
          </OptionSelect>
          <OptionSelect
            title="Show"
            handleChange={changeAmountDisplayed}
            defaultValue="12"
          >
            <AmountDisplayedOptions />
          </OptionSelect>
        </div>
      </div>
    </div>
  );
};

export default SortingOptions;
