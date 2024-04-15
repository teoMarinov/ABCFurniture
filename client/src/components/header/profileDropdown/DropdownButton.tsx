import { Button } from "@/components/ui/button";

interface DropDownButtonProps {
  onClick: () => void;
  text: string;
}
const DropdownButton = ({ onClick, text }: DropDownButtonProps) => {
  return (
    <Button onClick={onClick} variant={"ghost"} className="w-full inline">
      {text}
    </Button>
  );
};

export default DropdownButton;
