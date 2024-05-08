/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusCircle, Trash2 } from "lucide-react";

import { Dispatch, SetStateAction } from "react";

interface SingleImageHandlerProps {
  addToForm: (img: File) => void;
  imagePreview: string;
  setImagePreview: Dispatch<SetStateAction<string>>;
  removeFromForm: () => void;
}
const SingleImageHandler = ({
  addToForm,
  imagePreview,
  setImagePreview,
  removeFromForm,
}: SingleImageHandlerProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0]!;
    const reader = new FileReader();
    addToForm(file);
    reader.onload = () => {
      if (typeof reader.result !== "string") return;
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    removeFromForm();
    setImagePreview("");
  };

  return (
      <div className="size-full flex items-center justify-center border-2 shadow-md rounded-md p-2 group relative overflow-hidden">
        <img className="max-h-full max-w-full" src={imagePreview} />
        <PlusCircle
          size={100}
          className="group-hover:scale-125 transition absolute -z-10"
        />
        <Trash2
          className="z-50 size-[6%] absolute top-1 right-2 translate-x-10 group-hover:translate-x-0 transition text-red-700 hover:scale-125 cursor-pointer rounded-full"
          onClick={() => removeImage()}
        />
        <input
          className="cursor-pointer file:cursor-pointer xl:w-[590px] w-full h-[580px] opacity-0 z-0 absolute"
          type="file"
          onChange={handleOnChange}
          multiple
        />
      </div>
  );
};

export default SingleImageHandler;
