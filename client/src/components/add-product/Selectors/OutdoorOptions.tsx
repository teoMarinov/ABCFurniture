import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";

const OutdoorOptions = () => {
  return (
    <SelectGroup>
      <SelectLabel>Outdoor</SelectLabel>
      <SelectItem value="outdoor_furniture">Outdoor Furniture</SelectItem>
    </SelectGroup>
  );
};

export default OutdoorOptions;
