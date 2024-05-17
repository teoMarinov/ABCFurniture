import { Button } from "@/components/ui/button";
import { ListBulletIcon, ViewGridIcon } from "@radix-ui/react-icons";

interface ToggleViewProps {
  selected: "grid" | "list";
  handleToggle: (val: "grid" | "list") => void;
}
const ToggleView = ({ selected, handleToggle }: ToggleViewProps) => {
  const toggleList = () => {
    handleToggle("list");
  };
  const toggleGrid = () => {
    handleToggle("grid");
  };
  return (
    <div className="flex gap-x-2">
      <Button
        variant={selected === "grid" ? "default" : "ghost"}
        onClick={toggleGrid}
      >
        <ViewGridIcon />
      </Button>
      <Button
        variant={selected === "list" ? "default" : "ghost"}
        onClick={toggleList}
      >
        <ListBulletIcon />
      </Button>
    </div>
  );
};

export default ToggleView;
