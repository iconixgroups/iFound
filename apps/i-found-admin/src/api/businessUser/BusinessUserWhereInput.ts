import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BusinessUserWhereInput = {
  businessName?: StringNullableFilter;
  city?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  itemCatalog?: JsonFilter;
  phoneNumber?: StringNullableFilter;
  promotionCatalog?: JsonFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
  subscriptionPlan?: "Option1";
  vatNumber?: StringNullableFilter;
  zipCode?: IntNullableFilter;
};
