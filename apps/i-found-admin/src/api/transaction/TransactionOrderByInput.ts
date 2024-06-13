import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  businessId?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  paymentMethod?: SortOrder;
  receipt?: SortOrder;
  transactionAmount?: SortOrder;
  transactionDate?: SortOrder;
  updatedAt?: SortOrder;
};
