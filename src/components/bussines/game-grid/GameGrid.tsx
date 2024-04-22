import React from "react";
import { useGameGrid } from "./useGameGrid";

import styles from "./GameGrid.module.scss";

export function GameGrid() {
  const { questions, answers } = useGameGrid();

  return (
    <section className={styles.gameGrid}>
      <div />
      {questions.x.map((_, index) => (
          <div className={styles.questionSquare} key={`q-x-${  index}`} />
        ))}
      {answers.map((row, y) => (
        <React.Fragment key={`row-${  y}`}>
          <div className={styles.questionSquare}>
            <div className={styles.questionSquare} key={`q-y-${  y}`} />
          </div>
          {row.map((_, x) => (
            <div className={styles.answerSquare} key={`a-${x}-${y}`} />
          ))}
        </React.Fragment>
      ))}
    </section>
  );
}
