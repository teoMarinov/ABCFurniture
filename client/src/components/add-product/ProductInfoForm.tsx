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
      <div className="flex xl:flex-row flex-col gap-x-5 justify-between">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="xl:w-1/4">
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
            <FormItem className="xl:w-1/4">
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
            <FormItem className="xl:w-1/4">
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  disabled={isPending}
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
            <FormItem className="xl:w-1/4">
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  disabled={isPending}
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
                className="xl:h-[430px] h-[90vh]"
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
