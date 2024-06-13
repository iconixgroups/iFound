import { SortOrder } from "../../util/SortOrder";

export type BusinessUserOrderByInput = {
  businessName?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  itemCatalog?: SortOrder;
  phoneNumber?: SortOrder;
  promotionCatalog?: SortOrder;
  state?: SortOrder;
  street?: SortOrder;
  subscriptionPlan?: SortOrder;
  updatedAt?: SortOrder;
  vatNumber?: SortOrder;
  zipCode?: SortOrder;
};
