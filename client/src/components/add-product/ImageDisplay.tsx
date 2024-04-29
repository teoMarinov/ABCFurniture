import { Trash2, PlusCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

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
  const [display, setDisplay] = useState<number | null>(null);

  useEffect(() => {
    if (images.length === 0) {
      setDisplay(null);
    } else if (images.length === 1) {
      setDisplay(0);
    }
  }, [images]);


  return (
    <div className=" h-[790px] flex items-center">
      <div className="h-full w-[600px] grid grid-rows-4 grid-cols-3 gap-4 ">
        <div className="row-span-3 col-span-3 flex items-center justify-center border-2 shadow-md rounded-md p-2 group relative">
          <img className="max-h-full max-w-full" src={images[display!]} />
          <PlusCircle
            size={100}
            className="group-hover:scale-125 transition absolute -z-50"
          />
          <input
            className="cursor-pointer file:cursor-pointer w-[590px] h-[580px] opacity-0 z-50 absolute "
            type="file"
            onChange={handleOnChange}
          />
        </div>

        {images[0] && (
          <Carousel className="col-span-3">
            <CarouselContent className="w-[600px] gap-x-0.5 ml-[1px]">
              {images.map((image: string, index) => (
                <CarouselItem
                  key={image}
                  className="group h-[180px] basis-1/3 flex items-center justify-center border-2 shadow-md rounded-md p-1 relative cursor-pointer overflow-hidden"
                  onClick={() => setDisplay(index)}
                >
                  <Trash2
                    className="z-50 size-7 absolute top-0 right-0 translate-x-6 group-hover:translate-x-0 transition text-red-700 hover:scale-125 cursor-pointer rounded-full p-1"
                    onClick={() => handleRemove(index)}
                  />
                  <img className="max-h-full max-w-full -z-50" src={image} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default ImageDisplay;
