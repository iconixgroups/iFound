import { JsonValue } from "type-fest";

export type BusinessUser = {
  businessName: string | null;
  city: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  itemCatalog: JsonValue;
  phoneNumber: string | null;
  promotionCatalog: JsonValue;
  state: string | null;
  street: string | null;
  subscriptionPlan?: "Option1" | null;
  updatedAt: Date;
  vatNumber: string | null;
  zipCode: number | null;
};
