export interface userDataType {
  userId: number;
  email: string;
  name: string;
  role: "CUSTOMER" | "EMPLOYEE" | "MANAGER";
  created_at: string;
}

export type productType = {
  id: number;
  name: string;
  description: string;
  category: string;
  sub_category: string;
  added_at: string;
  price: number;
  quantity: number;
  images: string[];
};
