import {
  bedroomOptions,
  childrenOptions,
  hallwayOptions,
  kitchenOptions,
  lightingOptions,
  livingDiningOptions,
  outdoorOptions,
} from "@/common/furniture-categories";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CategoryRow from "./CategoryRow";

const SidebarAccordion = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Furniture</AccordionTrigger>
        <AccordionContent className="m-1">
          <CategoryRow title="Kitchen" options={kitchenOptions} />
          <CategoryRow title="Bedroom" options={bedroomOptions} />
          <CategoryRow
            title="Living and Dining Room"
            options={livingDiningOptions}
          />
          <CategoryRow title="Lighting" options={lightingOptions} />
          <CategoryRow title="Children Furniture" options={childrenOptions} />
          <CategoryRow title="Hallway" options={hallwayOptions} />
          <CategoryRow title="Outdoor Garden" options={outdoorOptions} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SidebarAccordion;
