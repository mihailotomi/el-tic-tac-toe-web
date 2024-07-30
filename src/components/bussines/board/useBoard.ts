import { useState } from "react";

import { useLazyCheckPlayerConstraintsQuery, useGetRandomGridQuery, GridItem } from "@api";
import { Player } from "@entities";
import { GridPosition, initGrid, updateGrid } from "@lib";

import { Answers, QuestionsAxis, UseBoardProps } from "./board.types";
import { mapGridItemToConstraint } from "./lib/mapGridItemToConstraint";

export function useBoard({ onAnswerCheck, onValidAnswer }: UseBoardProps) {
  // State
  const [answers, setAnswers] = useState<Answers>(initGrid<Player | null>(null));
  const [selectedAnswerPosition, setSelectedAnswerPosition] = useState<GridPosition | null>(null);

  // API
  const { data: gridClubs } = useGetRandomGridQuery();
  const [checkMatch] = useLazyCheckPlayerConstraintsQuery();

  // Computed variables
  const questionsX: QuestionsAxis = gridClubs?.x || [null, null, null];
  const questionsY: QuestionsAxis = gridClubs?.y || [null, null, null];

  // Event handlers
  const onChosePlayerHandler = async (player: Player) => {
    if (selectedAnswerPosition) {
      const gridItems = [questionsX[selectedAnswerPosition.x], questionsY[selectedAnswerPosition.y]] as GridItem[];
      const constraints = gridItems.map(mapGridItemToConstraint);

      const isMatch = await checkMatch({ player, constraints }).unwrap();

      if (isMatch) {
        const newAnswers = updateGrid(answers, player, selectedAnswerPosition);
        setAnswers(newAnswers);
        onValidAnswer(selectedAnswerPosition);
      }

      onAnswerCheck();
      setSelectedAnswerPosition(null);
    }
  };

  const onSelectAnswerPositionHandler = (row: number, column: number) => {
    setSelectedAnswerPosition({ x: row, y: column });
  };

  const onCancelAnswerHandler = () => {
    setSelectedAnswerPosition(null);
  };

  return {
    questions: {
      x: questionsX,
      y: questionsY,
    },
    answers,
    isInputOpen: !!selectedAnswerPosition,
    onSelectAnswerPositionHandler,
    onCancelAnswerHandler,
    onChosePlayerHandler,
    selectedAnswerPosition,
  };
}
