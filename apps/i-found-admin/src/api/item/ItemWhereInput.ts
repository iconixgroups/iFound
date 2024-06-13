import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ItemWhereInput = {
  attributes?: JsonFilter;
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  itemName?: StringNullableFilter;
  price?: FloatNullableFilter;
  stock?: IntNullableFilter;
  unitOfMeasurement?: StringNullableFilter;
};
