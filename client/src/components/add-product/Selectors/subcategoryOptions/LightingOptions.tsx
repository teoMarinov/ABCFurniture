import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";

const LightingOptions = () => {
  return (
    <SelectGroup>
      <SelectLabel>Lighting</SelectLabel>
      <SelectItem value="spot-lighting">Spot Lighting</SelectItem>
      <SelectItem value="plafonds">Plafonds</SelectItem>
      <SelectItem value="chandeliers-and-pendants">Chandeliers And Pendants</SelectItem>
      <SelectItem value="wall-bracket-lamps">Wall Bracket Lamps</SelectItem>
      <SelectItem value="reading-&-deside-lamps">Reading And Bedside Lamps</SelectItem>
      <SelectItem value="floor-lamps">Floor Lamps</SelectItem>
    </SelectGroup>
  );
};

export default LightingOptions;
