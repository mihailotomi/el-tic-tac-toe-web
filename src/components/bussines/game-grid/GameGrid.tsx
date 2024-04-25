import React from "react";

import { Club } from "src/entities";
import { useGameGrid } from "./useGameGrid";

import styles from "./GameGrid.module.scss";
import { AsyncAutocomplete } from "../../base/autocomplete/AsyncAutocomplete";

export function GameGrid() {
  const { questions, answers, isSearchingPlayers, players, searchPlayers } = useGameGrid();

  return (
    <>
      <section>
        <AsyncAutocomplete
          data={players || []}
          fetchOptions={searchPlayers}
          getOptionLabel={(player) => player.fullName}
          loading={isSearchingPlayers}
          label="Search players"
          onSubmit={console.log}
          checkOptionMatch={(option, value) => option.id === value.id}
        />
      </section>
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
    </>
  );
}
