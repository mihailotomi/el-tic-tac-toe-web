import { Club, Player } from "@entities";

export type QuestionsAxis = [Club | null, Club | null, Club | null];
export type Answers = [
  [Player | null, Player | null, Player | null],
  [Player | null, Player | null, Player | null],
  [Player | null, Player | null, Player | null],
];
