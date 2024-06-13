import { JsonValue } from "type-fest";

export type Offer = {
  applicableItems: JsonValue;
  createdAt: Date;
  description: string | null;
  discountPercentage: number | null;
  endDate: Date | null;
  id: string;
  offerTitle: string | null;
  quantityLimit: number | null;
  startDate: Date | null;
  updatedAt: Date;
};
