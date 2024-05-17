import {
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

const SortByOptions = () => {
  return (
    <SelectGroup>
      <SelectItem value="a-z">A-Z</SelectItem>
      <SelectItem value="z-a">Z-A</SelectItem>
      <SelectItem value="lowest-price">Lowest Price</SelectItem>
      <SelectItem value="highest-price">Highest Price</SelectItem>
      <SelectItem value="newest">Newest</SelectItem>
      <SelectItem value="oldest">Oldest</SelectItem>
    </SelectGroup>
  );
};

export default SortByOptions;
