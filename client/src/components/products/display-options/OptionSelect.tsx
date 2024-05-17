import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface OptionSelectProps {
  handleChange: (val: string) => void;
  title: string;
  children: React.ReactNode;
  defaultValue: string;
}
const OptionSelect = ({
  handleChange,
  title,
  children,
  defaultValue,
}: OptionSelectProps) => {
  return (
    <div className="flex items-center gap-x-2">
      <p className="cursor-default">{title}:</p>
      <Select onValueChange={handleChange} defaultValue={defaultValue}>
        <SelectTrigger className="w-32">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </Select>
    </div>
  );
};

export default OptionSelect;
