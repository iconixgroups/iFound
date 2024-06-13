import { RewardPointsWhereInput } from "./RewardPointsWhereInput";
import { RewardPointsOrderByInput } from "./RewardPointsOrderByInput";

export type RewardPointsFindManyArgs = {
  where?: RewardPointsWhereInput;
  orderBy?: Array<RewardPointsOrderByInput>;
  skip?: number;
  take?: number;
};
