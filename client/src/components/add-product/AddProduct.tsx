import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newProductSchema } from "../../schemas";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

import { Button } from "../ui/button";

import { request } from "@/utils/axios-helper";

import ProductInfoForm from "./ProductInfoForm";
import uploadImage from "@/utils/upload-image-cloudinary";

import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import MultiImageHandler from "../common/MultiImageHandler";

const AddProduct = () => {
  const nav = useNavigate();

  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof newProductSchema>>({
    resolver: zodResolver(newProductSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      sub_category: "",
      price: "1",
      quantity: "1",
      images: [],
    },
  });

  const addImageToForm = (img: File) => {
    form.setValue("images", [...form.getValues("images"), img]);
  };

  const removeImageFromForm = (index: number) => {
    const images = [...form.getValues("images")];
    images.splice(index, 1);
    form.setValue("images", images);
  };

  const resetForm = () => {
    form.reset();
  };

  const openSonner = (id: number) => {
    toast("", {
      description: "The product has been created successfully",
      position: "top-center",
      action: {
        label: "Check product",
        onClick: () => {
          console.log(id);
          nav(`/product/${id}`);
        },
      },
    });
  };

  const onSubmit = async (values: z.infer<typeof newProductSchema>) => {
    const imageUrls: string[] = [];

    const uploadPromises = values.images.map(async (data) => {
      setIsPending(true);
      const result = await uploadImage(data);
      imageUrls.push(result);
    });

    Promise.all(uploadPromises).then(() => {
      request("post", "/product/new", { ...values, images: imageUrls })
        .then(({ data }) => {
          setIsPending(false);
          resetForm();
          openSonner(data.id);
        })
        .catch((err) => console.error(err));
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="xl:h-[calc(100vh-116px)] w-full xl:flex flex-row-reverse gap-x-14 p-6 xl:px-14 xl:space-y-0 space-y-6"
      >
        <Card className="shadow-md xl:h-[790px] xl:w-2/3 ">
          <CardHeader>
            <div className="w-full flex items-center justify-center">
              <h1 className={"text-3xl font-semibold"}>Add a new product</h1>
            </div>
          </CardHeader>

          <CardContent>
            <ProductInfoForm form={form} isPending={isPending} />
          </CardContent>

          <CardFooter className="xl:block hidden">
            <Button
              variant={"default"}
              className="font-normal w-full"
              size={"sm"}
              type="submit"
              disabled={isPending}
            >
              Create
            </Button>
          </CardFooter>
        </Card>

        <MultiImageHandler
          addToForm={addImageToForm}
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
          removeFromForm={removeImageFromForm}
        />

        <Button
          variant={"default"}
          className="font-normal w-full block xl:hidden"
          size={"sm"}
          type="submit"
          disabled={isPending}
        >
          Create
        </Button>
      </form>
    </Form>
  );
};

export default AddProduct;
