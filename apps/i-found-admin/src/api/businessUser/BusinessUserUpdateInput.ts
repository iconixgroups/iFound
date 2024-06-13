import { InputJsonValue } from "../../types";

export type BusinessUserUpdateInput = {
  businessName?: string | null;
  city?: string | null;
  email?: string | null;
  itemCatalog?: InputJsonValue;
  phoneNumber?: string | null;
  promotionCatalog?: InputJsonValue;
  state?: string | null;
  street?: string | null;
  subscriptionPlan?: "Option1" | null;
  vatNumber?: string | null;
  zipCode?: number | null;
};
