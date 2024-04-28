import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";

const LightingOptions = () => {
  return (
    <SelectGroup>
      <SelectLabel>Lighting</SelectLabel>
      <SelectItem value="spot_lighting">Spot Lighting</SelectItem>
      <SelectItem value="plafonds">Plafonds</SelectItem>
      <SelectItem value="chandeliers_and_pendants">Chandeliers And Pendants</SelectItem>
      <SelectItem value="wall_bracket_lamps">Wall Bracket Lamps</SelectItem>
      <SelectItem value="reading_and_bedside_lamps">Reading And Bedside Lamps</SelectItem>
      <SelectItem value="floor_lamps">Floor Lamps</SelectItem>
    </SelectGroup>
  );
};

export default LightingOptions;
