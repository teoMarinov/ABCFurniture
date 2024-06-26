/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trash2, PlusCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface MultiImageHandlerProps {
  addToForm: (img: File) => void;
  imagePreview: string[];
  setImagePreview: Dispatch<SetStateAction<string[]>>;
  removeFromForm: (i: number) => void;
}
const MultiImageHandler = ({
  addToForm,
  imagePreview,
  setImagePreview,
  removeFromForm,
}: MultiImageHandlerProps) => {
  const [display, setDisplay] = useState<number | null>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files!);

    files.forEach((file) => {
      const reader = new FileReader();
      addToForm(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImagePreview((prevPreview: any) => [
            ...prevPreview,
            reader.result,
          ]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    removeFromForm(index);
    setImagePreview(imagePreview.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (imagePreview.length === 0) {
      setDisplay(null);
    } else if (imagePreview.length > 0) {
      setDisplay(0);
    }
  }, [imagePreview]);

  return (
    <div className="size-full flex flex-col gap-4">
      <div className="w-full h-3/4 flex items-center justify-center border-2 shadow-md rounded-md p-2 group relative">
        <img className="max-h-full max-w-full" src={imagePreview[display!]} />
        <PlusCircle
          size={100}
          className="group-hover:scale-125 transition absolute -z-10"
        />
        <input
          className="cursor-pointer file:cursor-pointer w-full h-full opacity-0 z-0 absolute"
          type="file"
          onChange={handleOnChange}
          multiple
        />
      </div>
      {imagePreview[0] && (
        <Carousel>
          <CarouselContent className="ml-[1px] gap-[0.40%]">
            {imagePreview.map((image: string, index) => (
              <CarouselItem
                key={index}
                className="group h-[180px] basis-[33%] flex items-center justify-center border-2 shadow-md rounded-md p-1 relative cursor-pointer overflow-hidden"
                onClick={() => setDisplay(index)}
              >
                <Trash2
                  className="z-50 size-7 absolute top-0 right-0 translate-x-6 group-hover:translate-x-0 transition text-red-700 hover:scale-125 cursor-pointer rounded-full p-1"
                  onClick={() => removeImage(index)}
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
  );
};

export default MultiImageHandler;
