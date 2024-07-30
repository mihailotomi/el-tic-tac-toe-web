import { Club } from "@entities";

export enum GridItemType {
  CLUB = "CLUB",
  COUNTRY = "COUNTRY",
}

type ClubItem = { type: GridItemType.CLUB; item: Club };

type CountryItem = { type: GridItemType.COUNTRY; item: string };

export type GridItem = ClubItem | CountryItem;

export function isClubItem(item: GridItem): item is ClubItem {
  return item.type === GridItemType.CLUB;
}

export function isCountryItem(item: GridItem): item is CountryItem {
  return item.type === GridItemType.COUNTRY;
}
