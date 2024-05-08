import * as z from "zod";

export const EditCategoryInfo = z.object({
  description: z.string(),
  image: z.any().nullable(),
});
