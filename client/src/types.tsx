export interface userDataType {
  userId?: number;
  email?: string;
  name?: string;
  role?: "CUSTOMER" | "EMPLOYEE" | "MANAGER";
  jwt?: string;
  success?: string;
  error?: string;
}
