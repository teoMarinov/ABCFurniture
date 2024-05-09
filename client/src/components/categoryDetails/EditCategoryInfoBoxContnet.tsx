import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { EditCategoryInfo } from "@/schemas/category-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import * as z from "zod";
import { request } from "@/utils/axios-helper";
import uploadImage from "@/utils/upload-image-cloudinary";
import { Textarea } from "../ui/textarea";
import SingleImageHandler from "../common/SingleImageHandler";
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
  const [newImage, setNewImage] = useState("");

  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof EditCategoryInfo>>({
    resolver: zodResolver(EditCategoryInfo),
    defaultValues: {
      description,
      image: image || "",
    },
  });

  const onCancel = () => {
    form.reset();
    setNewImage("");
  };

  const onSubmit = async (values: z.infer<typeof EditCategoryInfo>) => {

    setIsPending(true);
    const result = await uploadImage(values.image);

    request("put", "/category/main", { ...values, categoryName: name, image: result })
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
        <Form {...form}>
          <form className="w-[70vw] flex flex-row-reverse justify-between">
            <div className="w-2/3">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        disabled={isPending}
                        placeholder="Category Description"
                        className="h-96 resize-none"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="size-96">
              <SingleImageHandler
                addToForm={(img) => form.setValue("image", img)}
                imagePreview={newImage}
                setImagePreview={setNewImage}
                removeFromForm={() => form.resetField("image")}
              />
            </div>
          </form>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="w-1/2"
              disabled={isPending}
              onClick={form.handleSubmit(onSubmit)}
            >
              Save
            </AlertDialogCancel>
            <AlertDialogCancel className="w-1/2" onClick={onCancel}>
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditCategoryInfoBoxContnet;
