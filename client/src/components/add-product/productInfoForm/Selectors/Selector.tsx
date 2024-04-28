import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectorProps {
  children: React.ReactNode;
  field: any;
  placeholder: string;
  disabled?: boolean;
}
const Selector = ({ children, field, placeholder, disabled }: SelectorProps) => {
  return (
    <Select onValueChange={field.onChange} disabled={disabled}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </Select>
  );
};

export default Selector;
