import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  businessId?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  deliveryAddress?: SortOrder;
  deliveryFee?: SortOrder;
  deliveryType?: SortOrder;
  id?: SortOrder;
  items?: SortOrder;
  orderDate?: SortOrder;
  orderNumber?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
