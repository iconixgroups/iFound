import { SortOrder } from "../../util/SortOrder";

export type OfferOrderByInput = {
  applicableItems?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discountPercentage?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  offerTitle?: SortOrder;
  quantityLimit?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
