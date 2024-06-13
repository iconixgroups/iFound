import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "businessId";

export const OrderTitle = (record: TOrder): string => {
  return record.businessId?.toString() || String(record.id);
};
