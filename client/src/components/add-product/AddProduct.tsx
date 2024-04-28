import * as z from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newProductSchema } from "../../schemas";

import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "../ui/button";

import { useAuth } from "@/context/AuthProvider";
import { request } from "@/config/axios-helper";

const AddProduct = () => {
  const { signIn } = useAuth();

  const form = useForm<z.infer<typeof newProductSchema>>({
    resolver: zodResolver(newProductSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      sub_category: "",
      price: 0,
      quantity: 0,
      images: [],
    },
  });

  const onSubmit = (values: z.infer<typeof newProductSchema>) => {
    request("post", "/product/new", values).then(({ data }) => {
      if (data.error) {
        return;
      }
      signIn(data.user, data.jwt);
    });
  };

  return (
    <div className="h-[calc(100vh-116px)] bg-gray-300 w-full flex gap-x-6 p-6">
      {/* Images part */}
      <div className=" h-[790px] flex items-center">
        <div className="h-full w-[600px] grid grid-rows-4 grid-cols-3 gap-4">
          <div className="row-span-3 col-span-3 bg-purple-400">01</div>
          <div className=" bg-purple-400">02</div>
          <div className=" bg-purple-400">03</div>
          <div className=" bg-purple-400">03</div>
        </div>
      </div>
      {/* Text part */}
      <div className="bg-blue-200 h-[790px] w-full"></div>
    </div>
  );
};

export default AddProduct;
