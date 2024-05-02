import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";

const HallwayOptions = () => {
  return (
    <SelectGroup>
      <SelectLabel>Hallway</SelectLabel>
      <SelectItem value="console-tables">Console Tables</SelectItem>
      <SelectItem value="hall-cabinets-and-hangers">Hall Cobinets And Hangers</SelectItem>

    </SelectGroup>
  );
};

export default HallwayOptions;
