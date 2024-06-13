import { JsonValue } from "type-fest";

export type Item = {
  attributes: JsonValue;
  category: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  itemName: string | null;
  price: number | null;
  stock: number | null;
  unitOfMeasurement: string | null;
  updatedAt: Date;
};
