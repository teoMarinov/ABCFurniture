import * as z from "zod";

export const EditCategoryInfo = z.object({
  name: z.string(),
  description: z.string(),
  image: z.any()
});
