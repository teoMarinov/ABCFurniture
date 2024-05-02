import { ControllerRenderProps } from "react-hook-form";
import Selector from "./Selector";
import BedroomOptions from "./subcategoryOptions/BedroomOptions";
import ChildrenOptions from "./subcategoryOptions/ChildrenOptions";
import HallwayOptions from "./subcategoryOptions/HallwayOptions";
import KitchenOptions from "./subcategoryOptions/KitchenOptions";
import LightingOptions from "./subcategoryOptions/LightingOptions";
import LivingAndDiningOptions from "./subcategoryOptions/LivingAndDiningOptions";
import OutdoorOptions from "./subcategoryOptions/OutdoorOptions";

interface SubCategorySelectProps {
  field: ControllerRenderProps<
    {
      category: string;
      name: string;
      description: string;
      sub_category: string;
      price: number;
      quantity: number;
      images: {
        image: string;
      }[];
    },
    "sub_category"
  >;
  category: string;
}
const SubCategorySelect = ({ field, category }: SubCategorySelectProps) => {
  return (
    <Selector
      field={field}
      placeholder="Select a sub-category"
      disabled={category ? false : true}
    >
      {category === "kitchen" && <KitchenOptions />}
      {category === "bedroom" && <BedroomOptions />}
      {category === "living-and-dining-room" && <LivingAndDiningOptions />}
      {category === "lighting" && <LightingOptions />}
      {category === "children" && <ChildrenOptions />}
      {category === "hallway" && <HallwayOptions />}
      {category === "outdoor" && <OutdoorOptions />}
    </Selector>
  );
};

export default SubCategorySelect;
