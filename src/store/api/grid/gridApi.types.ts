import { Club } from "@entities";

type ClubItem = { itemType: "club"; club: Club };

type CountryItem = { itemType: "country"; country: string };

export type GridItem = ClubItem | CountryItem;

export function isClubItem(item: GridItem): item is ClubItem {
  return item.itemType === "club";
}

export function isCountryItem(item: GridItem): item is CountryItem {
  return item.itemType === "country";
}
