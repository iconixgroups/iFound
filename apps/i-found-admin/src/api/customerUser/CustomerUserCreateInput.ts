import { InputJsonValue } from "../../types";

export type CustomerUserCreateInput = {
  addresses?: InputJsonValue;
  city?: string | null;
  email?: string | null;
  fullName?: string | null;
  phoneNumber?: string | null;
  rewardPoints?: number | null;
  savedCards?: InputJsonValue;
  state?: string | null;
  street?: string | null;
  transactionHistory?: InputJsonValue;
  walletBalance?: number | null;
  zipCode?: number | null;
};
