import Selector from "./Selector";
import KitchenOptions from "./KitchenOptions";
import BedroomOptions from "./BedroomOptions";
import LivingAndDiningOptions from "./LivingAndDiningOptions";
import LightingOptions from "./LightingOptions";
import ChildrenOptions from "./ChildrenOptions";
import HallwayOptions from "./HallwayOptions";
import OutdoorOptions from "./OutdoorOptions";

interface SubCategorySelectProps {
  field: any;
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
      {category === "living_dining" && <LivingAndDiningOptions />}
      {category === "lighting" && <LightingOptions />}
      {category === "children" && <ChildrenOptions />}
      {category === "hallway" && <HallwayOptions />}
      {category === "outdoor" && <OutdoorOptions />}
    </Selector>
  );
};

export default SubCategorySelect;
