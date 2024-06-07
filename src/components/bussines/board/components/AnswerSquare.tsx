import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";

import { Player } from "@entities";

import { SquareColor } from "../board.types";

import styles from "../Board.module.scss";

export type AnswerSquareProps = {
  player: Player | null;
  onSelectAnswerPosition: () => void;
  color?: SquareColor;
};

export function AnswerSquare({ player, onSelectAnswerPosition, color = "grey" }: AnswerSquareProps) {
  return (
    <div className={`${styles.answerSquare} ${styles[`square-color-${color}`]}`}>
      {player ? (
        <img src={player?.imageUrl} alt={player?.lastName} className={styles.questionImg} />
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
