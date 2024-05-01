import { productType } from "@/common/types";

interface ImageDisplayProps extends productType {}
const ImageDisplay = ({
  id,
  name,
  description,
  category,
  sub_category,
  added_at,
  price,
  quantity,
  images,
}: ImageDisplayProps) => {
  console.log("🚀 ~ images:", images)
  return (
    <div>
      <h1>{name}</h1>
      <img src={images[0].url} />
    </div>
  );
};

export default ImageDisplay;
