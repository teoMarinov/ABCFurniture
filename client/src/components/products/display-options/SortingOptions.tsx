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

  return (
    <div className="py-4 ">
      <div className="flex items-center justify-between w-full">

        <ToggleView selected={currentlySelected} handleToggle={handleToggle} />

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
