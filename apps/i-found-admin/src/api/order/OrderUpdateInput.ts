import { InputJsonValue } from "../../types";

export type OrderUpdateInput = {
  businessId?: string | null;
  customerId?: string | null;
  deliveryAddress?: string | null;
  deliveryFee?: number | null;
  deliveryType?: "Option1" | null;
  items?: InputJsonValue;
  orderDate?: Date | null;
  orderNumber?: string | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
};
