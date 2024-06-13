import { InputJsonValue } from "../../types";

export type TransactionCreateInput = {
  businessId?: string | null;
  customerId?: string | null;
  paymentMethod?: "Option1" | null;
  receipt?: InputJsonValue;
  transactionAmount?: number | null;
  transactionDate?: Date | null;
};
