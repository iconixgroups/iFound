import { Offer as TOffer } from "../api/offer/Offer";

export const OFFER_TITLE_FIELD = "offerTitle";

export const OfferTitle = (record: TOffer): string => {
  return record.offerTitle?.toString() || String(record.id);
};
