import { Item as TItem } from "../api/item/Item";

export const ITEM_TITLE_FIELD = "itemName";

export const ItemTitle = (record: TItem): string => {
  return record.itemName?.toString() || String(record.id);
};
