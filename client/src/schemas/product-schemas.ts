import * as z from "zod";

const validCategories = [
  "kitchen",
  "bedroom",
  "living-and-dining-room",
  "lighting",
  "children-furniture",
  "hallway",
  "outdoor-garden",
];

const validSubCategories = [
  "classic-and-rustic-kitchens",
  "modern-kitchens",
  "sinks",
  "mixing-taps",
  "kitchen-worktops",
  "accessories",
  "bedroom-sets",
  "beds",
  "mattresses",
  "wardrobes",
  "wardrobe-closets",
  "chests-and-dressing-tables",
  "night-stands",
  "dining-packages",
  "dining-tables",
  "chairs",
  "sofa-and-sofa-beds",
  "armchairs-and-lounges",
  "sideboards-and-cabinets",
  "tv-units",
  "lounge-tables",
  "spot-lighting",
  "plafonds",
  "chandeliers-and-pendants",
  "wall-bracket-lamps",
  "reading-&-deside-lamps",
  "floor-lamps",
  "kids-room",
  "console-tables",
  "hall-cabinets-and-hangers",
  "outdoor-furniture",
];

export const newProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  category: z
    .string()
    .min(1)
    .refine((value) => validCategories.includes(value)),
  sub_category: z
    .string()
    .min(1)
    .refine((value) => validSubCategories.includes(value)),
  price: z
    .string()
    .min(1)
    .refine((val) => Number(val) > 0),
  quantity: z
    .string()
    .min(1)
    .refine((val) => Number(val) > 0),
  images: z.array(z.any()),
});
