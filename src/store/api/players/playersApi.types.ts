import { GridItemType } from "../grid";

type PlayerClubConstraint = { type: GridItemType.CLUB; id: number };

type PlayerCountryConstraint = { type: GridItemType.COUNTRY; code: string };

export type PlayerConstraint = PlayerClubConstraint | PlayerCountryConstraint;
