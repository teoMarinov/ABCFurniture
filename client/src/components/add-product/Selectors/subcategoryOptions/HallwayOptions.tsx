import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";

const HallwayOptions = () => {
  return (
    <SelectGroup>
      <SelectLabel>Hallway</SelectLabel>
      <SelectItem value="console_tables">Console Tables</SelectItem>
      <SelectItem value="hall_cabinets_and_hangers">Hall Cobinets And Hangers</SelectItem>

    </SelectGroup>
  );
};

export default HallwayOptions;
