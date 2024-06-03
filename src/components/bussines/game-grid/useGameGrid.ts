import { useState } from "react";

import { useLazyCheckPlayerMatchQuery, useGetRandomGridQuery } from "@api";
import { Club, Player } from "@entities";

import { Answers, QuestionsAxis, UseGameGridProps } from "./gameGrid.types";

export function useGameGrid({ onAnswerCheck, onValidAnswer }: UseGameGridProps) {
  // State
  const [answers, setAnswers] = useState<Answers>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [selectedAnswerPosition, setSelectedAnswerPosition] = useState<{ x: number; y: number } | null>(null);

  // API
  const { data: gridClubs } = useGetRandomGridQuery();
  const [checkMatch] = useLazyCheckPlayerMatchQuery();

  // Computed variables
  const questionsX: QuestionsAxis = gridClubs?.x || [null, null, null];
  const questionsY: QuestionsAxis = gridClubs?.y || [null, null, null];

  // Event handlers
  const onChosePlayerHandler = async (player: Player) => {
    if (selectedAnswerPosition) {
      const clubs = [questionsX[selectedAnswerPosition.x], questionsY[selectedAnswerPosition.y]] as Club[];
      const answer = await checkMatch({ player, clubs }).unwrap();

      if (answer.isMatch) {
        const newAnswers: Answers = [[...answers[0]], [...answers[1]], [...answers[2]]];
        newAnswers[selectedAnswerPosition.y][selectedAnswerPosition.x] = player;

        setAnswers(newAnswers);
        onValidAnswer(selectedAnswerPosition);
      }

      onAnswerCheck();
      setSelectedAnswerPosition(null);
    }
  };

  const onSelectAnswerPositionHandler = (row: number, column: number) => {
    setSelectedAnswerPosition({ x: column, y: row });
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
