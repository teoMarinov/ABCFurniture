import { Trash2, PlusCircle } from "lucide-react";

interface ImageDisplayProps {
  images: string[];
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemove: (i: number) => void;
}
const ImageDisplay = ({
  images = [],
  handleOnChange,
  handleRemove,
}: ImageDisplayProps) => {
  return (
    <div className=" h-[790px] flex items-center">
      <div className="h-full w-[600px] grid grid-rows-4 grid-cols-3 gap-4 overflow-hidden">
        <div className="row-span-3 col-span-3 flex items-center justify-center border-2 shadow-md rounded-md p-2 group">
          <img className="max-h-full max-w-full" src={images[0]} />
          <PlusCircle size={100} className="group-hover:scale-125 transition" />
          <input
            className="cursor-pointer file:cursor-pointer w-[590px] h-[580px] opacity-0 bg-red-600 z-50 absolute "
            type="file"
            onChange={handleOnChange}
          />
        </div>

        {images.map((image: string, index) => (
          <div
            key={image}
            className="group flex items-center justify-center border-2 shadow-md rounded-md p-1 relative "
          >
            <Trash2
              className="z-50 size-7 absolute top-2 right-2 scale-0 group-hover:scale-100 transition text-red-700 hover:bg-white/80 cursor-pointer rounded-full p-1"
              onClick={() => handleRemove(index)}
            />
            <img className="max-h-full max-w-full -z-50" src={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDisplay;
