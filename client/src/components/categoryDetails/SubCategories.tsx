import { useParams } from "react-router-dom";

const SubCategories = () => {
  const params = useParams();
  console.log("🚀 ~ CategoryDetails ~ params:", params.category);

  return (
    <div>
      <p>{params.category}</p>
    </div>
  );
};

export default SubCategories;
