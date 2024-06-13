import { CustomerUser as TCustomerUser } from "../api/customerUser/CustomerUser";

export const CUSTOMERUSER_TITLE_FIELD = "fullName";

export const CustomerUserTitle = (record: TCustomerUser): string => {
  return record.fullName?.toString() || String(record.id);
};
