import { UserFeedback as TUserFeedback } from "../api/userFeedback/UserFeedback";

export const USERFEEDBACK_TITLE_FIELD = "id";

export const UserFeedbackTitle = (record: TUserFeedback): string => {
  return record.id?.toString() || String(record.id);
};
