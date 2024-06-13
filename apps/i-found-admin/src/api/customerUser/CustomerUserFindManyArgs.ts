import { CustomerUserWhereInput } from "./CustomerUserWhereInput";
import { CustomerUserOrderByInput } from "./CustomerUserOrderByInput";

export type CustomerUserFindManyArgs = {
  where?: CustomerUserWhereInput;
  orderBy?: Array<CustomerUserOrderByInput>;
  skip?: number;
  take?: number;
};
