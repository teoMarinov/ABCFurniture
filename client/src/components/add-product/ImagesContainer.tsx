import { Trash2, PlusCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

interface ImagesContainerProps {
  images: string[];
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemove: (i: number) => void;
}
const ImagesContainer = ({
  images = [],
  handleOnChange,
  handleRemove,
}: ImagesContainerProps) => {
  const [display, setDisplay] = useState<number | null>(null);

  useEffect(() => {
    if (images.length === 0) {
      setDisplay(null);
    } else if (images.length > 0) {
      setDisplay(0);
    }
  }, [images]);

  return (
    <div className="h-[790px] xl:w-1/3 flex items-center">
      <div className="h-full w-full flex flex-col gap-4 ">
        <div className="w-full h-3/4 flex  items-center justify-center border-2 shadow-md rounded-md p-2 group relative">
          <img className="max-h-full max-w-full" src={images[display!]} />
          <PlusCircle
            size={100}
            className="group-hover:scale-125 transition absolute -z-10"
          />
          <input
            className="cursor-pointer file:cursor-pointer xl:w-[590px] w-full h-[580px] opacity-0 z-0 absolute"
            type="file"
            onChange={handleOnChange}
            multiple
          />
        </div>

        {images[0] && (
          <Carousel>
            <CarouselContent className="ml-[1px]">
              {images.map((image: string, index) => (
                <CarouselItem
                  key={index}
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
            <div className="xl:block hidden">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default ImagesContainer;
