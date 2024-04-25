import { useEffect, useState } from "react";

import { useLazyCheckPlayerMatchQuery, useLazyGetRandomGridQuery } from "@api";

import { Club, Player } from "@entities";
import { Answers, QuestionsAxis } from "./gameGrid.types";

export function useGameGrid() {
  const [questionsX, setQuestionsX] = useState<QuestionsAxis>([null, null, null]);
  const [questionsY, setQuestionsY] = useState<QuestionsAxis>([null, null, null]);
  const [answers, setAnswers] = useState<Answers>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [selectedAnswerPosition, setSelectedAnswerPosition] = useState<{ x: number; y: number } | null>(null);

  const [fetchGrid, { data: gridClubs }] = useLazyGetRandomGridQuery();
  const [checkMatch] = useLazyCheckPlayerMatchQuery();

  const onChosePlayerHandler = async (player: Player) => {
    console.log(player, selectedAnswerPosition);

    if (selectedAnswerPosition) {
      const clubs = [questionsX[selectedAnswerPosition.x], questionsY[selectedAnswerPosition.y]] as Club[];
      const answer = await checkMatch({ player, clubs }).unwrap();

      if (answer.isMatch) {
        const newAnswers = [[...answers[0]], [...answers[1]], [...answers[2]]] as Answers;
        newAnswers[selectedAnswerPosition.y][selectedAnswerPosition.x] = player;

        setAnswers(newAnswers);
      }
      setSelectedAnswerPosition(null);
    }
  };

  const onSelectAnswerPositionHandler = (row: number, column: number) => {
    setSelectedAnswerPosition({ x: column, y: row });
  };

  const onCancelAnswerHandler = () => {
    setSelectedAnswerPosition(null);
  };

  useEffect(() => {
    fetchGrid();
  }, []);

  useEffect(() => {
    if (gridClubs?.x && gridClubs?.y) {
      setQuestionsX(gridClubs.x);
      setQuestionsY(gridClubs.y);
    }
  }, [gridClubs]);

  useEffect(() => {}, []);

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
  };
}
