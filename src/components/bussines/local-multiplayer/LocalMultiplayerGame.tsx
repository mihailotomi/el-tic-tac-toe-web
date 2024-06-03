import { GridType } from "@lib";
import { useLocalMultiplayerGame } from "./useLocalMultiplayerGame";
import { SquareColor } from "../board/board.types";
import { Board } from "../board";
import { determineWinner } from "./lib/determineWinner";

export function LocalMultiplayerGame() {
  const { scores, onAnswerCheckHandler, onValidAnswerHandler, userTurn } = useLocalMultiplayerGame();
  const colors: GridType<SquareColor> = scores.map((row) =>
    row.map((score) => (score ? (score === 1 ? "red" : "blue") : "grey")),
  ) as GridType<SquareColor>;
  const winner = determineWinner(scores);

  return (
    <>
      <h2>Player {userTurn} turn.</h2>
      <h1>{winner && `Winner is player ${  winner}`}</h1>
      <Board squareColors={colors} onAnswerCheck={onAnswerCheckHandler} onValidAnswer={onValidAnswerHandler} />
    </>
  );
}
