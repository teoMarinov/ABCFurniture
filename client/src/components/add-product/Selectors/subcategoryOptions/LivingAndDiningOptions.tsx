import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";


const LivingAndDiningOptions = () => {
  return (
    <SelectGroup>
        <SelectLabel>Living and Dining</SelectLabel>
      <SelectItem value="dining_packages">Dining Packages</SelectItem>
      <SelectItem value="dining_tables">Dining Tables</SelectItem>
      <SelectItem value="chairs">Chairs</SelectItem>
      <SelectItem value="sofa_and_sofa_beds">Sofa And Sofabeds</SelectItem>
      <SelectItem value="armchairs_and_lounges">
        Armchairs And Lounges
      </SelectItem>
      <SelectItem value="sideboards_and_cabinets">
        Sideboards And Cabinets
      </SelectItem>
      <SelectItem value="tv_units">TV Units</SelectItem>
      <SelectItem value="lounge_tables">Lounge Tables</SelectItem>
    </SelectGroup>
  );
};

export default LivingAndDiningOptions;
