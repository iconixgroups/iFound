import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  businessId?: StringNullableFilter;
  customerId?: StringNullableFilter;
  id?: StringFilter;
  paymentMethod?: "Option1";
  receipt?: JsonFilter;
  transactionAmount?: FloatNullableFilter;
  transactionDate?: DateTimeNullableFilter;
};
