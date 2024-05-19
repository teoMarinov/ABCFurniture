import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
interface PriceRangeSliderProps {
  min: number;
  max: number;
  range: number[];
  setRange: React.Dispatch<React.SetStateAction<number[]>>;
}
const PriceRangeSlider = ({
  min,
  max,
  range,
  setRange,
}: PriceRangeSliderProps) => {
  const handleChangeLowest = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange([Number(e.target.value), range[1]]);
  };
  const handleChangeHighest = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange([range[1], Number(e.target.value)]);
  };
  const enterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log(range);
    }
  }
  return (
    <div className="bg-black xl:flex hidden py-2 w-full mt-3.5 text-white flex-col items-center">
      <div
        onKeyDown={enterPress}
        className="flex w-full justify-between px-4 my-2"
      >
        <div className="flex items-center">
          <p>Min:</p>
          <Input
            value={range[0]!}
            onChange={handleChangeLowest}
            className="h-s5 w-20 text-black ml-2 "
          />
        </div>
        <div className="flex items-center">
          <p>Max:</p>
          <Input
            value={range[1]!}
            onChange={handleChangeHighest}
            className="h-s5 w-20 text-black ml-2"
          />
        </div>
      </div>
      <Slider
        min={min}
        max={max}
        step={1}
        value={range}
        onValueChange={setRange}
        className="mb-2 w-72 mt-4"
      />
    </div>
  );
};

export default PriceRangeSlider;
