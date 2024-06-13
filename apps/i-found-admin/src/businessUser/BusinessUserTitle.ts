import { BusinessUser as TBusinessUser } from "../api/businessUser/BusinessUser";

export const BUSINESSUSER_TITLE_FIELD = "businessName";

export const BusinessUserTitle = (record: TBusinessUser): string => {
  return record.businessName?.toString() || String(record.id);
};
