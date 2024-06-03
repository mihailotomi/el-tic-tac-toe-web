import { GridType } from "@lib";
import { useLocalMultiplayerGame } from "./useLocalMultiplayerGame";
import { SquareColor } from "../board/board.types";
import { Board } from "../board";

export function LocalMultiplayerGame() {
  const { scores, onAnswerCheckHandler, onValidAnswerHandler, userTurn } = useLocalMultiplayerGame();
  const colors: GridType<SquareColor> = scores.map((row) =>
    row.map((score) => (score ? (score === 1 ? "red" : "blue") : "grey")),
  ) as GridType<SquareColor>;

  return (
    <>
      Player {userTurn} turn{" "}
      <Board squareColors={colors} onAnswerCheck={onAnswerCheckHandler} onValidAnswer={onValidAnswerHandler} />;
    </>
  );
}
