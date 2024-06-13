import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";
import { TransactionUpdateInput } from "./TransactionUpdateInput";

export type UpdateTransactionArgs = {
  where: TransactionWhereUniqueInput;
  data: TransactionUpdateInput;
};
