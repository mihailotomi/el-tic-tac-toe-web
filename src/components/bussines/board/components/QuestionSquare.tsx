import { Question } from "../board.types";

import styles from "../Board.module.scss";

export type QuestionSquareProps = {
  question: Question | null;
};

export function QuestionSquare({ question }: QuestionSquareProps) {
  return (
    <div className={styles.questionSquare}>
      {question && <img src={question.crestUrl} alt={question.name} className={styles.questionImg} />}
    </div>
  );
}
