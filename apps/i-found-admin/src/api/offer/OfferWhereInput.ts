import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OfferWhereInput = {
  applicableItems?: JsonFilter;
  description?: StringNullableFilter;
  discountPercentage?: FloatNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  offerTitle?: StringNullableFilter;
  quantityLimit?: IntNullableFilter;
  startDate?: DateTimeNullableFilter;
};
