import { TransactionWhereInput } from "./TransactionWhereInput";
import { TransactionOrderByInput } from "./TransactionOrderByInput";

export type TransactionFindManyArgs = {
  where?: TransactionWhereInput;
  orderBy?: Array<TransactionOrderByInput>;
  skip?: number;
  take?: number;
};
