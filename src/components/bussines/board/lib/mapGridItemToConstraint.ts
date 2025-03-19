import { GridItem, PlayerConstraint } from "@api";

export const mapGridItemToConstraint = (gridItem: GridItem): PlayerConstraint => {
  return { type: gridItem.type, item: gridItem.item };
};
