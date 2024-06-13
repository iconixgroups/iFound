import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "businessId";

export const TransactionTitle = (record: TTransaction): string => {
  return record.businessId?.toString() || String(record.id);
};
