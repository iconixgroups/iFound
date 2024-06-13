import { InputJsonValue } from "../../types";

export type ItemCreateInput = {
  attributes?: InputJsonValue;
  category?: string | null;
  description?: string | null;
  itemName?: string | null;
  price?: number | null;
  stock?: number | null;
  unitOfMeasurement?: string | null;
};
