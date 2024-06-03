import React from "react";

import { QuestionSquare } from "./components/QuestionSquare";
import { AnswerSquare } from "./components/AnswerSquare";
import { BoardProps } from "./board.types";
import { useBoard } from "./useBoard";

import styles from "./Board.module.scss";
import { BoardInput } from "./components/BoardInput";

export function Board({
  gridColors = [
    ["grey", "grey", "grey"],
    ["grey", "grey", "grey"],
    ["grey", "grey", "grey"],
  ],
  onAnswerCheck,
  onValidAnswer,
}: BoardProps) {
  const {
    questions,
    answers,
    isInputOpen,
    onSelectAnswerPositionHandler,
    onCancelAnswerHandler,
    onChosePlayerHandler,
    selectedAnswerPosition,
  } = useBoard({ onAnswerCheck, onValidAnswer });

  return (
    <section className={styles.boardWrapper}>
      {/* Input that acts as a modal inside answer grid */}
      <BoardInput
        key={JSON.stringify(selectedAnswerPosition)}
        isOpen={isInputOpen}
        onChosePlayer={onChosePlayerHandler}
        onCancel={onCancelAnswerHandler}
      />

      <div className={styles.board}>
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
