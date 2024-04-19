import ColContainer from "./ColContainer";

const kitchenOptions = [
  "classic and rustic kitchens",
  "modern kitchens",
  "sinks",
  "mising taps",
  "kitchen worktops",
  "accessories",
];

const bedroomOptions = [
  "bedroom sets",
  "beds",
  "mattresses",
  "wardrobes",
  "wardrobe closets",
  "chests and dressing tables",
  "night stands",
];

const livingDiningOptions = [
  "dining packages",
  "dining tables",
  "chairs",
  "sofa and sofa-beds",
  "armchairs and lounges",
  "sideboards and cabinets",
  "tv units",
  "lounge tables",
];

const lightingOptions = [
  "spot lighting",
  "plafonds",
  "chandeliers and pendants",
  "wall bracket lamps",
  "reading & deside lamps",
  "floor lamps",
];

const childrenOptions = ["kids room"];

const hallwayOptions = ["console tables", "hall cabinets and hangers"];

const outdoorOptions = ["outdoor furniture"];

const CategoriesMenu = () => {
  return (
    <div className="h-96 flex gap-x-4 uppercase pl-9 pt-6">
      <ColContainer title="kitchen" options={kitchenOptions} />
      <ColContainer title="Bedroom" options={bedroomOptions} />
      <ColContainer
        title="Living and Dining Room"
        options={livingDiningOptions}
      />
      <ColContainer title="Lighting" options={lightingOptions} />
      <ColContainer title="Children Furniture" options={childrenOptions} />
      <ColContainer title="Hallway" options={hallwayOptions} />
      <ColContainer title="Outdoor Garden" options={outdoorOptions} />
    </div>
  );
};

export default CategoriesMenu;
