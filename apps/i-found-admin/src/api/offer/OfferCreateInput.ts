import { InputJsonValue } from "../../types";

export type OfferCreateInput = {
  applicableItems?: InputJsonValue;
  description?: string | null;
  discountPercentage?: number | null;
  endDate?: Date | null;
  offerTitle?: string | null;
  quantityLimit?: number | null;
  startDate?: Date | null;
};
