import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";


const LivingAndDiningOptions = () => {
  return (
    <SelectGroup>
        <SelectLabel>Living and Dining</SelectLabel>
      <SelectItem value="dining-packages">Dining Packages</SelectItem>
      <SelectItem value="dining-tables">Dining Tables</SelectItem>
      <SelectItem value="chairs">Chairs</SelectItem>
      <SelectItem value="sofa-and-sofa-beds">Sofa And Sofabeds</SelectItem>
      <SelectItem value="armchairs-and-lounges">
        Armchairs And Lounges
      </SelectItem>
      <SelectItem value="sideboards-and-cabinets">
        Sideboards And Cabinets
      </SelectItem>
      <SelectItem value="tv-units">TV Units</SelectItem>
      <SelectItem value="lounge-tables">Lounge Tables</SelectItem>
    </SelectGroup>
  );
};

export default LivingAndDiningOptions;
