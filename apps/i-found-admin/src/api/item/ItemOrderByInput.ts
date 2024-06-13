import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  attributes?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  itemName?: SortOrder;
  price?: SortOrder;
  stock?: SortOrder;
  unitOfMeasurement?: SortOrder;
  updatedAt?: SortOrder;
};
