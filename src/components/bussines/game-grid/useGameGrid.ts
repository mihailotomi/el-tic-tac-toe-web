import { useState } from "react";

export function useGameGrid() {
  const [questionsX, _setQuestionsX] = useState(["", "", ""]);
  const [questionsY, _setQuestionsY] = useState(["", "", ""]);
  const [answers, _setAnswers] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  return {
    questions: {
      x: questionsX,
      y: questionsY,
    },
    answers,
  };
}
