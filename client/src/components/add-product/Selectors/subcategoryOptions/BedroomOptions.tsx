import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
const BedroomOptions = () => {
  return (
    <SelectGroup>
      <SelectLabel>Bedroom</SelectLabel>
      <SelectItem value="bedroom-sets">Bedroom Sets</SelectItem>
      <SelectItem value="beds">Beds</SelectItem>
      <SelectItem value="mattresses">Mattresses</SelectItem>
      <SelectItem value="wardrobes">Wardrobes</SelectItem>
      <SelectItem value="wardrobe-closets">Wardrobe Closets</SelectItem>
      <SelectItem value="chests-and-dressing-tables">
        Chests And Dressing Tables
      </SelectItem>
      <SelectItem value="night-stands">Night Stands</SelectItem>
    </SelectGroup>
  );
};

export default BedroomOptions;
