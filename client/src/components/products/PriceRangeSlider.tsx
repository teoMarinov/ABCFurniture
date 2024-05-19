import { ChangeEvent, ChangeEventHandler } from "react";
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
  return (
    <div className="bg-black py-2 w-full mt-3.5 text-white">
      <Slider
        min={min}
        max={max}
        step={1}
        value={range}
        onValueChange={setRange}
        className="w-80"
      />
      <div className="flex justify-between px-5">
        <div className="flex items-center">
          <p>Min:</p>
          <Input
            value={range[0]!}
            onChange={handleChangeLowest}
            className="h-s5 w-12 text-black"
          />
        </div>
        <div className="flex items-center">
          <p>Max:</p>
          <Input
            value={range[1]!}
            onChange={handleChangeHighest}
            className="h-s5 w-12 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
