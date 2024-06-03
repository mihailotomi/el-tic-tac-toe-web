import { useState } from "react";
import { GridPosition, initGrid, updateGrid } from "@lib";
import { UserScores } from "./localMultiplayerGame.types";

export function useLocalMultiplayerGame() {
  // State
  const [userTurn, setUserTurn] = useState<1 | 2>(1);
  const [scores, setScores] = useState<UserScores>(initGrid(null));

  const onAnswerCheckHandler = () => {
    setUserTurn(userTurn === 1 ? 2 : 1);
  };

  const onValidAnswerHandler = (position: GridPosition) => {
    const newScores = updateGrid(scores, userTurn, position);
    setScores(newScores);
  };

  return {
    scores,
    onAnswerCheckHandler,
    onValidAnswerHandler,
    userTurn,
  };
}
