import { JsonValue } from "type-fest";

export type CustomerUser = {
  addresses: JsonValue;
  city: string | null;
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  id: string;
  phoneNumber: string | null;
  rewardPoints: number | null;
  savedCards: JsonValue;
  state: string | null;
  street: string | null;
  transactionHistory: JsonValue;
  updatedAt: Date;
  walletBalance: number | null;
  zipCode: number | null;
};
