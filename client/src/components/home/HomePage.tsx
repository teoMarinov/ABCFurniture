import { toast } from "sonner";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("", {
          description: "The product has been created successfully",
          position: "top-center",
          action: {
            label: "Check product",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
};

export default HomePage;
