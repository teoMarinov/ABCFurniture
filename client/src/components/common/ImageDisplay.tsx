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
  return (
    <div className="size-[450px] flex items-center justify-center border-2 shadow-md rounded-md p-2 group relative">
      <img className="max-h-full max-w-full" src={images[0].url} />
    </div>
  );
};

export default ImageDisplay;
