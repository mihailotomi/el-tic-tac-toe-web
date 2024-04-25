import React from "react";
import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";

import { Club } from "@entities";

import { GameGridInput } from "./GameGridInput";
import { useGameGrid } from "./useGameGrid";

import styles from "./GameGrid.module.scss";

export function GameGrid() {
  const { questions, answers, isInputOpen, onSelectAnswerPositionHandler } = useGameGrid();

  return (
    <section className={styles.gridWrapper}>
      <GameGridInput isOpen={isInputOpen} />
      <div className={styles.gameGrid}>
        <div />
        {questions.x.map((q, index) => (
          <div className={styles.questionSquare} key={`q-x-${index}`}>
            {q && <img src={q.crestUrl} alt="" className={styles.questionImg} />}
          </div>
        ))}
        {answers.map((row, rowIndex) => (
          <React.Fragment key={`row-${rowIndex}`}>
            <div className={styles.questionSquare} key={`q-y-${rowIndex}`}>
              {questions.y && questions.y[rowIndex] && (
                <img src={(questions.y[rowIndex] as Club).crestUrl} alt="" className={styles.questionImg} />
              )}
            </div>
            {row.map((_, columnIndex) => (
              <div className={styles.answerSquare} key={`a-${rowIndex}-${columnIndex}`}>
                {answers[rowIndex][columnIndex] ? (
                  "dsad"
                ) : (
                  <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={() => onSelectAnswerPositionHandler(rowIndex, columnIndex)}
                  >
                    <Add fontSize="large" />
                  </IconButton>
                )}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
