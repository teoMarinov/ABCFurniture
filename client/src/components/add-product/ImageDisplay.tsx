import { Trash2, PlusCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      <div className="h-full w-[600px] grid grid-rows-4 grid-cols-3 gap-4 ">
        <div className="row-span-3 col-span-3 flex items-center justify-center border-2 shadow-md rounded-md p-2 group">
          <img className="max-h-full max-w-full" src={images[0]} />
          <PlusCircle size={100} className="group-hover:scale-125 transition" />
          <input
            className="cursor-pointer file:cursor-pointer w-[590px] h-[580px] opacity-0 bg-red-600 z-50 absolute "
            type="file"
            onChange={handleOnChange}
          />
        </div>

        <Carousel className="col-span-3">
          <CarouselContent className="w-[600px] gap-x-0.5 ml-[1px]">
            {images.map((image: string, index) => (
              <CarouselItem
                key={image}
                className="group h-[180px] basis-1/3 flex items-center justify-center border-2 shadow-md rounded-md p-1 relative "
              >
                <Trash2
                  className="z-50 size-7 absolute top-2 right-2 scale-0 group-hover:scale-100 transition text-red-700 hover:bg-white/80 cursor-pointer rounded-full p-1"
                  onClick={() => handleRemove(index)}
                />
                <img className="max-h-full max-w-full -z-50" src={image} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ImageDisplay;
