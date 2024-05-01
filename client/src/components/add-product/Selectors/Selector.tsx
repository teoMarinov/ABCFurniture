/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Select,
  SelectContent,
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
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </Select>
  );
};

export default Selector;
