import { GridItemType } from "../grid";

type BasePlayerConstraint = { item: string };
type PlayerClubConstraint = { type: GridItemType.CLUB; } & BasePlayerConstraint;
type PlayerCountryConstraint = { type: GridItemType.COUNTRY; } & BasePlayerConstraint;

export type PlayerConstraint = PlayerClubConstraint | PlayerCountryConstraint;
