import React from "react";

import { GameGridInput } from "./components/GameGridInput";
import { QuestionSquare } from "./components/QuestionSquare";
import { AnswerSquare } from "./components/AnswerSquare";
import { useGameGrid } from "./useGameGrid";

import styles from "./GameGrid.module.scss";

export function GameGrid() {
  const {
    questions,
    answers,
    isInputOpen,
    onSelectAnswerPositionHandler,
    onCancelAnswerHandler,
    onChosePlayerHandler,
    selectedAnswerPosition,
  } = useGameGrid();

  return (
    <section className={styles.gameGridWrapper}>
      {/* Input that acts as a modal inside answer grid */}
      <GameGridInput
        key={JSON.stringify(selectedAnswerPosition)}
        isOpen={isInputOpen}
        onChosePlayer={onChosePlayerHandler}
        onCancel={onCancelAnswerHandler}
      />

      <div className={styles.gameGrid}>
        {/* Empty div to take the grid position at 0,0 */}
        <div />

        {/* Upper questions */}
        {questions.x.map((q, index) => (
          <QuestionSquare question={q} key={`q-x-${index}`} />
        ))}

        {answers.map((row, rowIndex) => (
          <React.Fragment key={`row-${rowIndex}`}>
            {/* Question for the row */}
            <QuestionSquare question={questions.y && questions.y[rowIndex]} key={`q-y-${rowIndex}`} />

            {/* Row anwers */}
            {row.map((_, columnIndex) => (
              <div className={styles.answerSquare} key={`a-${rowIndex}-${columnIndex}`}>
                <AnswerSquare
                  player={answers[rowIndex][columnIndex]}
                  onSelectAnswerPosition={() => onSelectAnswerPositionHandler(rowIndex, columnIndex)}
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
