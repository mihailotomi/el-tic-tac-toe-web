import { useEffect, useState } from "react";
import { Club } from "src/entities";
import { useLazyGetRandomGridQuery } from "../../../store";

export function useGameGrid() {
  const [questionsX, setQuestionsX] = useState<[Club | null, Club | null, Club | null]>([null, null, null]);
  const [questionsY, setQuestionsY] = useState<[Club | null, Club | null, Club | null]>([null, null, null]);
  const [answers, _setAnswers] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [fetchGrid, { data }] = useLazyGetRandomGridQuery();

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
  };
}
