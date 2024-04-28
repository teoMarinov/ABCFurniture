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

const AddProduct = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof newProductSchema>>({
    resolver: zodResolver(newProductSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      sub_category: "",
      price: "0",
      quantity: "1",
      images: [
        "https://buffer.com/library/content/images/2023/10/free-images.jpg",
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      ],
    },
  });

  const onSubmit = (values: z.infer<typeof newProductSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      request("post", "/product/new", values).then(({ data }) => {
        console.log(data)
        if (data.error) {
          setError(data.error);
          return;
        }
        setSuccess(data.success);
      });
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="h-[calc(100vh-116px)] w-full flex gap-x-6 p-6"
      >
        <ImageDisplay />

        {/* Data form */}

        <>
          <Card className="shadow-md h-[790px] w-full">
            <CardHeader>
              <div className="w-full flex items-center justify-center">
                <h1 className={"text-3xl font-semibold"}>Add a new product</h1>
              </div>
            </CardHeader>
            <CardContent className="pb-3">
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
