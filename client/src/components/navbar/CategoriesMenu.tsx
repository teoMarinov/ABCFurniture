import {
  bedroomOptions,
  childrenOptions,
  hallwayOptions,
  kitchenOptions,
  lightingOptions,
  livingDiningOptions,
  outdoorOptions,
} from "@/common/furniture-categories";
import ColContainer from "./ColContainer";

const CategoriesMenu = () => {
  return (
    <div className="sm:grid w-[94vw] 2xl:w-[88vw] 2xl:grid-cols-7 xl:grid-cols-4 grid-cols-3 hidden uppercase px-5">
      <ColContainer title="Kitchen" options={kitchenOptions} />
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
