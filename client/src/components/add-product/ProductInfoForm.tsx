/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import CategorySelect from "./Selectors/CategorySelect";
import SubCategorySelect from "./Selectors/SubCategorySelect";
import { Textarea } from "@/components/ui/textarea";

interface ProductFormProps {
  form: UseFormReturn<any>;
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
                  type="number"
                  {...field}
                  disabled={isPending}
                  className="w-64"
                  placeholder="Add price"
                  min={1}

                />
              </FormControl>
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
                  type="number"
                  {...field}
                  disabled={isPending}
                  className="w-64"
                  placeholder="Add product quantity"
                  min={1}
                />
              </FormControl>
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
                className="h-[450px]"
                placeholder="Add product description"
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default ProductInfoForm;
