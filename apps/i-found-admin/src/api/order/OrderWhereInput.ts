import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type OrderWhereInput = {
  businessId?: StringNullableFilter;
  customerId?: StringNullableFilter;
  deliveryAddress?: StringNullableFilter;
  deliveryFee?: FloatNullableFilter;
  deliveryType?: "Option1";
  id?: StringFilter;
  items?: JsonFilter;
  orderDate?: DateTimeNullableFilter;
  orderNumber?: StringNullableFilter;
  status?: "Option1";
  totalAmount?: FloatNullableFilter;
};
