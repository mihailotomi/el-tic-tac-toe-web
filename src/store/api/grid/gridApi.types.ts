export enum GridItemType {
  CLUB = "CLUB",
  COUNTRY = "COUNTRY",
}

type BaseGridItem = { item: string; imageUrl: string };
type ClubItem = { type: GridItemType.CLUB } & BaseGridItem;
type CountryItem = { type: GridItemType.COUNTRY } & BaseGridItem;

export type GridItem = ClubItem | CountryItem;

export function isClubItem(item: GridItem): item is ClubItem {
  return item.type === GridItemType.CLUB;
}

export function isCountryItem(item: GridItem): item is CountryItem {
  return item.type === GridItemType.COUNTRY;
}
