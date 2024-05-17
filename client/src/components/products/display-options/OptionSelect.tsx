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
}
const OptionSelect = ({ handleChange, title, children }: OptionSelectProps) => {
  return (
    <div className="flex items-center">
      <p className="w-16">{title}:</p>
      <Select onValueChange={handleChange} defaultValue="a-z">
        <SelectTrigger className="w-32">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </Select>
    </div>
  );
};

export default OptionSelect;
