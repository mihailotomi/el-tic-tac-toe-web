import { Club, Player } from "@entities";

export type Question = Club | null;

export type QuestionsAxis = [Question, Question, Question];

export type Answers = [
  [Player | null, Player | null, Player | null],
  [Player | null, Player | null, Player | null],
  [Player | null, Player | null, Player | null],
];
