import { SortOrder } from "../../util/SortOrder";

export type CustomerUserOrderByInput = {
  addresses?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  phoneNumber?: SortOrder;
  rewardPoints?: SortOrder;
  savedCards?: SortOrder;
  state?: SortOrder;
  street?: SortOrder;
  transactionHistory?: SortOrder;
  updatedAt?: SortOrder;
  walletBalance?: SortOrder;
  zipCode?: SortOrder;
};
