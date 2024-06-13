import { JsonValue } from "type-fest";

export type Order = {
  businessId: string | null;
  createdAt: Date;
  customerId: string | null;
  deliveryAddress: string | null;
  deliveryFee: number | null;
  deliveryType?: "Option1" | null;
  id: string;
  items: JsonValue;
  orderDate: Date | null;
  orderNumber: string | null;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
};
