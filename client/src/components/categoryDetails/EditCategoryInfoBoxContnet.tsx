import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState, useEffect } from "react";

import { request } from "@/utils/axios-helper";
import uploadImage from "@/utils/upload-image-cloudinary";
import { Textarea } from "../ui/textarea";
import SingleImageHandler from "../shared/UploadImageHandler/SingleImageHandler";
import { PenBox } from "lucide-react";

interface EditCategoryInfoBoxContnetProps {
  name: string;
  description?: string;
  image?: string;
}
const EditCategoryInfoBoxContnet = ({
  name,
  description = "",
  image = "",
}: EditCategoryInfoBoxContnetProps) => {
  const [imagePreview, setImagePreview] = useState(image);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [newDescription, setNewDescription] = useState(description);

  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    image && setImagePreview(image);
    description && setNewDescription(description);
  }, [description, image]);

  const onCancel = () => {
    setNewDescription(description);
    setNewImage(null);
    setImagePreview(image);
  };

  const onSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsPending(true);
    const img = await uploadImage(newImage!);

    request("put", `/category/${name}`, {
      description: newDescription,
      image: img || imagePreview,
    })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        setIsPending(false);
      });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="absolute">
        <PenBox className="hover:scale-110 transition cursor-pointer size-7 p-0.5" />
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-fit gap-6">
        <form className="w-[70vw] flex flex-row-reverse justify-between">
          <div className="w-2/3">
            <Textarea
              onChange={(e) => setNewDescription(e.target.value)}
              value={newDescription}
              disabled={isPending}
              placeholder="Category Description"
              className="h-96 resize-none text-xl"
            />
          </div>
          <div className="size-96">
            <SingleImageHandler
              addToForm={(img) => setNewImage(img)}
              imagePreview={imagePreview}
              setImagePreview={setImagePreview}
              removeFromForm={() => setNewImage(null)}
            />
          </div>
        </form>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="w-1/2"
            disabled={isPending}
            onClick={(e) => onSubmit(e)}
          >
            Save
          </AlertDialogCancel>
          <AlertDialogCancel className="w-1/2" onClick={onCancel}>
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditCategoryInfoBoxContnet;
