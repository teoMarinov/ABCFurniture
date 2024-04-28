import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
const KitchenOptions = () => {
  return (
    <SelectGroup>
      <SelectLabel>Kitchen</SelectLabel>
      <SelectItem value="classic_and_rustic_kitchens">Classic And Rustic Kitchens</SelectItem>
      <SelectItem value="modern_kitchens">Modern Kitchens</SelectItem>
      <SelectItem value="sinks">Sinks</SelectItem>
      <SelectItem value="mixing_taps">Mixing Taps</SelectItem>
      <SelectItem value="kitchen_worktops">Kitchen Worktops</SelectItem>
      <SelectItem value="accessories">Accessories</SelectItem>
    </SelectGroup>
  );
};

export default KitchenOptions;
