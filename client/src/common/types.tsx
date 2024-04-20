export interface userDataType {
  userId: number;
  email: string;
  name: string;
  role: "CUSTOMER" | "EMPLOYEE" | "MANAGER";
  created_at: string
}
