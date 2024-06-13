import { UserFeedbackWhereInput } from "./UserFeedbackWhereInput";
import { UserFeedbackOrderByInput } from "./UserFeedbackOrderByInput";

export type UserFeedbackFindManyArgs = {
  where?: UserFeedbackWhereInput;
  orderBy?: Array<UserFeedbackOrderByInput>;
  skip?: number;
  take?: number;
};
