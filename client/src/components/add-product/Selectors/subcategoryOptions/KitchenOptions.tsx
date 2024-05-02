import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
const KitchenOptions = () => {
  return (
    <SelectGroup>
      <SelectLabel>Kitchen</SelectLabel>
      <SelectItem value="classic-and-rustic-kitchens">Classic And Rustic Kitchens</SelectItem>
      <SelectItem value="modern-kitchens">Modern Kitchens</SelectItem>
      <SelectItem value="sinks">Sinks</SelectItem>
      <SelectItem value="mixing-taps">Mixing Taps</SelectItem>
      <SelectItem value="kitchen-worktops">Kitchen Worktops</SelectItem>
      <SelectItem value="accessories">Accessories</SelectItem>
    </SelectGroup>
  );
};

export default KitchenOptions;
