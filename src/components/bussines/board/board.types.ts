import { Club, Player } from "@entities";

export type Question = Club | null;

export type QuestionsAxis = [Question, Question, Question];

/**
 * Represents the grid answers in any game
 * Can be filled with players that solve the Grid.
 */
export type Answers = [
  [Player | null, Player | null, Player | null],
  [Player | null, Player | null, Player | null],
  [Player | null, Player | null, Player | null],
];

export type GridColor = "red" | "blue" | "grey";

export type BoardProps = {
  gridColors?: [
    [GridColor, GridColor, GridColor],
    [GridColor, GridColor, GridColor],
    [GridColor, GridColor, GridColor],
  ];
  onAnswerCheck: () => void;
  onValidAnswer: (position: { x: number; y: number }) => void;
};

export type UseBoardProps = Pick<BoardProps, "onAnswerCheck" | "onValidAnswer">;
