import { BusinessUserWhereInput } from "./BusinessUserWhereInput";
import { BusinessUserOrderByInput } from "./BusinessUserOrderByInput";

export type BusinessUserFindManyArgs = {
  where?: BusinessUserWhereInput;
  orderBy?: Array<BusinessUserOrderByInput>;
  skip?: number;
  take?: number;
};
