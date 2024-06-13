import { JsonValue } from "type-fest";

export type Transaction = {
  businessId: string | null;
  createdAt: Date;
  customerId: string | null;
  id: string;
  paymentMethod?: "Option1" | null;
  receipt: JsonValue;
  transactionAmount: number | null;
  transactionDate: Date | null;
  updatedAt: Date;
};
