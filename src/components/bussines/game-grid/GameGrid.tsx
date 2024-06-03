import React from "react";

import { GameGridInput } from "./components/GameGridInput";
import { QuestionSquare } from "./components/QuestionSquare";
import { AnswerSquare } from "./components/AnswerSquare";
import { GameGridProps } from "./gameGrid.types";
import { useGameGrid } from "./useGameGrid";

import styles from "./GameGrid.module.scss";

export function GameGrid({
  gridColors = [
    ["grey", "grey", "grey"],
    ["grey", "grey", "grey"],
    ["grey", "grey", "grey"],
  ],
  onAnswerCheck,
  onValidAnswer,
}: GameGridProps) {
  const {
    questions,
    answers,
    isInputOpen,
    onSelectAnswerPositionHandler,
    onCancelAnswerHandler,
    onChosePlayerHandler,
    selectedAnswerPosition,
  } = useGameGrid({ onAnswerCheck, onValidAnswer });

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

        {/* Column question squares */}
        {questions.x.map((q, index) => (
          <QuestionSquare question={q} key={`q-x-${index}`} />
        ))}

        {answers.map((row, rowIndex) => (
          <React.Fragment key={`row-${rowIndex}`}>
            {/* Row question square */}
            <QuestionSquare question={questions.y && questions.y[rowIndex]} key={`q-y-${rowIndex}`} />

            {/* Row anwer squares */}
            {row.map((_, columnIndex) => (
              <AnswerSquare
                color={gridColors[rowIndex][columnIndex]}
                player={answers[rowIndex][columnIndex]}
                onSelectAnswerPosition={() => onSelectAnswerPositionHandler(rowIndex, columnIndex)}
                key={`a-${rowIndex}-${columnIndex}`}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
