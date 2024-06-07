import { Player } from "@entities";
import { GridType } from "@lib";
import { GridItem } from "@api";

export type Question = GridItem | null;

export type QuestionsAxis = [Question, Question, Question];

/**
 * Represents the grid answers in any game
 * Can be filled with players that solve the Grid.
 */
export type Answers = GridType<Player | null>;

export type SquareColor = "red" | "blue" | "grey";

export type BoardProps = {
  squareColors?: GridType<SquareColor>;
  onAnswerCheck: () => void;
  onValidAnswer: (position: { x: number; y: number }) => void;
};

export type UseBoardProps = Pick<BoardProps, "onAnswerCheck" | "onValidAnswer">;
