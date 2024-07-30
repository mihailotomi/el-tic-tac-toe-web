import { GridItem, GridItemType, isClubItem, isCountryItem, PlayerConstraint } from "@api";

export const mapGridItemToConstraint = (gridItem: GridItem): PlayerConstraint => {
  if (isCountryItem(gridItem)) {
    return { type: gridItem.type, code: gridItem.item };
  }
  if (isClubItem(gridItem)) {
    return { type: gridItem.type, id: gridItem.item.id };
  }
  return { type: GridItemType.CLUB, id: 0};
};
