import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z
  .object({
    name: z.string().min(1, {
      message: "Name is required",
    }),
    email: z.string().email({
      message: "Email is required",
    }),
    password: z.string().min(6, {
      message: "Minimun 6 characters required",
    }),
    confirmPassword: z.string().min(6, {
      message: "Minimun 6 characters required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const validCategories = [
  "kitchen",
  "bedroom",
  "living_dining",
  "lighting",
  "children",
  "hallway",
  "outdoor",
];

const validSubCategories = [
  "classic_and_rustic_kitchens",
  "modern_kitchens",
  "sinks",
  "mixing_taps",
  "kitchen_worktops",
  "accessories",
  "bedroom_sets",
  "beds",
  "mattresses",
  "wardrobes",
  "wardrobe_closets",
  "chests_and_dressing_tables",
  "night_stands",
  "dining_packages",
  "dining_tables",
  "chairs",
  "sofa_and_sofa_beds",
  "armchairs_and_lounges",
  "sideboards_and_cabinets",
  "tv_units",
  "lounge_tables",
  "spot_lighting",
  "plafonds",
  "chandeliers_and_pendants",
  "wall_bracket_lamps",
  "reading_and_bedside_lamps",
  "floor_lamps",
  "kids_room",
  "console_tables",
  "hall_cabinets_and_hangers",
  "outdoor_furniture",
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
  images: z.array(z.string()).min(1),
});
