import CategoryContainer from "../common/CategoryContainer";

type DataType = {
  categoryName: string;
  image: string;
  description: string;
};

interface CategoryDisplayProps {
  data: DataType[];
}
const CategoryDisplay = ({ data }: CategoryDisplayProps) => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 2xl:w-[90%] w-full 2xl:p-0 px-4">
      {data.map((info) => (
        <CategoryContainer
          key={info.categoryName}
          name={info.categoryName}
          image={info.image}
        />
      ))}
    </div>
  );
};

export default CategoryDisplay;
