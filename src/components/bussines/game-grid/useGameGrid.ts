import { useEffect, useState } from "react";

import { useLazyGetRandomGridQuery } from "@api";

import { Answers, QuestionsAxis } from "./gameGrid.types";

export function useGameGrid() {
  const [questionsX, setQuestionsX] = useState<QuestionsAxis>([null, null, null]);
  const [questionsY, setQuestionsY] = useState<QuestionsAxis>([null, null, null]);
  const [answers, _setAnswers] = useState<Answers>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [selectedAnswerPosition, setSelectedAnswerPosition] = useState<{ x: number; y: number } | null>(null);

  const [fetchGrid, { data }] = useLazyGetRandomGridQuery();

  const onSelectAnswerPositionHandler = (row: number, column: number) => {
    setSelectedAnswerPosition({ x: column, y: row });
  };

  useEffect(() => {
    fetchGrid();
  }, []);

  useEffect(() => {
    if (data?.x && data?.y) {
      setQuestionsX(data.x);
      setQuestionsY(data.y);
    }
  }, [data]);

  return {
    questions: {
      x: questionsX,
      y: questionsY,
    },
    answers,
    isInputOpen: !!selectedAnswerPosition,
    onSelectAnswerPositionHandler
  };
}
