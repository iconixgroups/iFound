import { InputJsonValue } from "../../types";

export type ItemUpdateInput = {
  attributes?: InputJsonValue;
  category?: string | null;
  description?: string | null;
  itemName?: string | null;
  price?: number | null;
  stock?: number | null;
  unitOfMeasurement?: string | null;
};
