import React from "react";

import { Club } from "src/entities";
import { useGameGrid } from "./useGameGrid";

import styles from "./GameGrid.module.scss";

export function GameGrid() {
  const { questions, answers } = useGameGrid();

  return (
    <section className={styles.gameGrid}>
      <div />
      {questions.x.map((q, index) => (
        <div className={styles.questionSquare} key={`q-x-${index}`}>
          {q && <img src={q.crestUrl} alt="" className={styles.questionImg} />}
        </div>
      ))}
      {answers.map((row, i) => (
        <React.Fragment key={`row-${i}`}>
          <div className={styles.questionSquare} key={`q-y-${i}`}>
            {questions.y && questions.y[i] && (
              <img src={(questions.y[i] as Club).crestUrl} alt="" className={styles.questionImg} />
            )}
          </div>
          {row.map((_, x) => (
            <div className={styles.answerSquare} key={`a-${x}-${i}`} />
          ))}
        </React.Fragment>
      ))}
    </section>
  );
}
