import {
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

const NumberDisplayOptions = () => {
  return (
    <SelectGroup>
      <SelectItem value="12">12</SelectItem>
      <SelectItem value="24">24</SelectItem>
      <SelectItem value="48">48</SelectItem>
    </SelectGroup>
  );
};

export default NumberDisplayOptions;
