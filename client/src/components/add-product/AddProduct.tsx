/* eslint-disable @typescript-eslint/no-explicit-any */
import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newProductSchema } from "../../schemas";

import { Form } from "@/components/ui/form";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

import { Button } from "../ui/button";

import { request } from "@/config/axios-helper";
import ImageDisplay from "./ImageDisplay";

import ProductInfoForm from "./ProductInfoForm";
import axios from "axios";

const AddProduct = () => {
  const upload_preset = "jynhwbpv";

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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files!);

    files.forEach((file) => {
      const reader = new FileReader();
      form.setValue("images", [...form.getValues("images"), file]);
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

  const handleRemove = (index: number) => {
    const images = [...form.getValues("images")];
    images.splice(index, 1);
    form.setValue("images", images);
    setImagePreview(imagePreview.filter((_, i) => i !== index));
  };

  const onSubmit = async (values: z.infer<typeof newProductSchema>) => {
    const imageUrls: string[] = [];
    const formData = new FormData();

    const uploadPromises = values.images.map(async (data, index) => {
      formData.append("file", data);
      formData.append("upload_preset", upload_preset);
      setIsPending(true);
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dl5y0big3/image/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            data: formData,
          }
        );
        imageUrls.push(response.data.secure_url);
      } catch (err) {
        console.log("Problem at index", index);
        console.error(err);
      }
    });

    Promise.all(uploadPromises).then(() => {
      request("post", "/product/new", { ...values, images: imageUrls })
        .then(({ data }) => {
          if (data.error) {
            return;
          }
        })
        .catch((err) => console.error(err))
        .finally(() => setIsPending(false));
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="h-[calc(100vh-116px)] w-full flex gap-x-12 p-6 px-12"
      >
        <ImageDisplay
          images={imagePreview}
          handleOnChange={handleOnChange}
          handleRemove={handleRemove}
        />

        {/* Data form */}
        <>
          <Card className="shadow-md h-[790px] w-full">
            <CardHeader>
              <div className="w-full flex items-center justify-center">
                <h1 className={"text-3xl font-semibold"}>Add a new product</h1>
              </div>
            </CardHeader>

            <CardContent className="pb-4">
              <ProductInfoForm form={form} isPending={isPending} />
            </CardContent>

            <CardFooter>
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
        </>
      </form>
    </Form>
  );
};

export default AddProduct;
