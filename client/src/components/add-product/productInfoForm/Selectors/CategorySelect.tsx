import { SelectGroup, SelectItem } from "@/components/ui/select";
import Selector from "./Selector";

interface CategorySelectProps {
  field: any;
}
const CategorySelect = ({ field }: CategorySelectProps) => {
  return (
    <Selector field={field} placeholder="Select a category">
      <SelectGroup>
        <SelectItem value="kitchen">Kitchen</SelectItem>
        <SelectItem value="bedroom">Bedroom</SelectItem>
        <SelectItem value="living_dining">Living Dining</SelectItem>
        <SelectItem value="lighting">Lighting</SelectItem>
        <SelectItem value="children">Children</SelectItem>
        <SelectItem value="hallway">Hallway</SelectItem>
        <SelectItem value="outdoor">Outdoor</SelectItem>
      </SelectGroup>
    </Selector>
  );
};

export default CategorySelect;
