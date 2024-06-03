import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";

import { Player } from "@entities";

import { GridColor } from "../gameGrid.types";

import styles from "../GameGrid.module.scss";

export type AnswerSquareProps = {
  player: Player | null;
  onSelectAnswerPosition: () => void;
  color?: GridColor;
};

export function AnswerSquare({ player, onSelectAnswerPosition, color = "grey" }: AnswerSquareProps) {
  return (
    <div className={`${styles.answerSquare} ${styles[`grid-color-${  color}`]}`}>
      {player ? (
        player?.imageUrl ? (
          <img src={player?.imageUrl} alt="" className={styles.questionImg} />
        ) : (
          player?.lastName
        )
      ) : (
        <IconButton
          aria-label="add"
          size="large"
          className={styles.answerSelectButton}
          onClick={onSelectAnswerPosition}
        >
          <Add fontSize="large" />
        </IconButton>
      )}
    </div>
  );
}
