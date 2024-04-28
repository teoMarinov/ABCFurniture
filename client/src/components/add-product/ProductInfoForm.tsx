/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import CategorySelect from "./Selectors/CategorySelect";
import SubCategorySelect from "./Selectors/SubCategorySelect";
import { Textarea } from "@/components/ui/textarea";

interface ProductFormProps {
  form: UseFormReturn<
    {
      sub_category: string;
      category: string;
      name: string;
      description: string;
      price: number;
      quantity: number;
      images: {
        image: string;
      }[];
    },
    any,
    undefined
  >;
  isPending: boolean;
}
const ProductInfoForm = ({ form, isPending }: ProductFormProps) => {
  return (
    <div className="space-y-2">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
                {...field}
                disabled={isPending}
                placeholder="Add product name"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex flex-row gap-x-5 justify-between">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <CategorySelect field={field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sub_category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sub-Category</FormLabel>
              <FormControl>
                <SubCategorySelect
                  category={form.getValues("category")}
                  field={field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  className="w-64"
                  placeholder="Add price"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  className="w-64"
                  placeholder="Add product quantity"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                disabled={isPending}
                className="h-[435px]"
                placeholder="Add product description"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ProductInfoForm;
