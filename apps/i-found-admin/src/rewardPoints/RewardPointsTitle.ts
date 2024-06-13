import { RewardPoints as TRewardPoints } from "../api/rewardPoints/RewardPoints";

export const REWARDPOINTS_TITLE_FIELD = "id";

export const RewardPointsTitle = (record: TRewardPoints): string => {
  return record.id?.toString() || String(record.id);
};
