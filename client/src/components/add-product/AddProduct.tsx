import * as z from "zod";
import { useState, useTransition } from "react";
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

  const [isPending, startTransition] = useTransition();

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
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    form.setValue("images", [...form.getValues("images"), file]);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setImagePreview([...imagePreview, reader.result]);
      }
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (values: z.infer<typeof newProductSchema>) => {
    const formData = new FormData();
    values.images.map((data) => {
      formData.append("file", data);
      formData.append("upload_preset", upload_preset);

      axios
        .post(
          "https://api.cloudinary.com/v1_1/dl5y0big3/image/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            data: formData, // Use the data option to specify the request body
          }
        )
        .then(({ data }) => {
          console.log(data);
        })
        .catch((err) => err);
    });

    startTransition(() => {
      // request("post", "/product/new", values)
      //   .then(({ data }) => {
      //     if (data.error) {
      //       return;
      //     }
      //   })
      //   .catch((err) => console.log("SECOND", err));
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="h-[calc(100vh-116px)] w-full flex gap-x-12 p-6 px-12"
      >
        <ImageDisplay images={imagePreview} handleOnChange={handleOnChange} />

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
