import { isCountryItem } from "@store";
import { Question } from "../board.types";

import styles from "../Board.module.scss";

export type QuestionSquareProps = {
  question: Question | null;
};

export function QuestionSquare({ question }: QuestionSquareProps) {
  return (
    <div className={styles.questionSquare}>
      {question && (
        <img
          src={question.imageUrl}
          alt={question.imageUrl}
          className={isCountryItem(question) ? styles.questionFlag : styles.questionCrest}
        />
      )}
    </div>
  );
}
