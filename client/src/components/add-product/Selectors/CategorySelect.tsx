import { SelectGroup, SelectItem } from "@/components/ui/select";
import Selector from "./Selector";
import { ControllerRenderProps } from "react-hook-form";

interface CategorySelectProps {
  field: ControllerRenderProps<
    {
      name: string;
      description: string;
      category: string;
      sub_category: string;
      price: number;
      quantity: number;
      images: {
        image: string;
      }[];
    },
    "category"
  >;
}
const CategorySelect = ({ field }: CategorySelectProps) => {
  return (
    <Selector field={field} placeholder="Select a category">
      <SelectGroup>
        <SelectItem value="kitchen">Kitchen</SelectItem>
        <SelectItem value="bedroom">Bedroom</SelectItem>
        <SelectItem value="living-and-dining-room">Living Dining</SelectItem>
        <SelectItem value="lighting">Lighting</SelectItem>
        <SelectItem value="children-furniture">Children</SelectItem>
        <SelectItem value="hallway">Hallway</SelectItem>
        <SelectItem value="outdoor-garden">Outdoor</SelectItem>
      </SelectGroup>
    </Selector>
  );
};

export default CategorySelect;
