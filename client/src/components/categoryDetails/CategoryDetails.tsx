import { useParams } from "react-router-dom";

const CategoryDetails = () => {
  const params = useParams();
  console.log("🚀 ~ CategoryDetails ~ params:", params);

  return (
    <div>
      <p>a</p>
    </div>
  );
};

export default CategoryDetails;
