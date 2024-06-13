import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CustomerUserWhereInput = {
  addresses?: JsonFilter;
  city?: StringNullableFilter;
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  phoneNumber?: StringNullableFilter;
  rewardPoints?: IntNullableFilter;
  savedCards?: JsonFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
  transactionHistory?: JsonFilter;
  walletBalance?: FloatNullableFilter;
  zipCode?: IntNullableFilter;
};
