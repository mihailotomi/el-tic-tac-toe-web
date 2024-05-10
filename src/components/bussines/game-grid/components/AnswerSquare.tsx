import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";

import { Player } from "@entities";

import styles from "../GameGrid.module.scss";


export type AnswerSquareProps = {
  player: Player | null;
  onSelectAnswerPosition: () => void;
};

export function AnswerSquare({ player, onSelectAnswerPosition }: AnswerSquareProps) {
  return player ? (
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
  );
}
