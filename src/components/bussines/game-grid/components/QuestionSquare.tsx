import { Question } from "../gameGrid.types";

import styles from "../GameGrid.module.scss";

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
