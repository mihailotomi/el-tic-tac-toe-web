import { isCountryItem } from "src/store";
import { Question } from "../board.types";

import styles from "../Board.module.scss";
import { getCountryFlagUrl } from "../lib";

export type QuestionSquareProps = {
  question: Question | null;
};

export function QuestionSquare({ question }: QuestionSquareProps) {
  return (
    <div className={styles.questionSquare}>
      {question && (
        <img
          src={isCountryItem(question) ? getCountryFlagUrl(question.country) : question.club.crestUrl}
          alt={isCountryItem(question) ? question.country : question.club.name}
          className={isCountryItem(question) ? styles.questionFlag : styles.questionCrest}
        />
      )}
    </div>
  );
}
