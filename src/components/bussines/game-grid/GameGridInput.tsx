import { Button } from "@mui/material";

import { AsyncAutocomplete } from "@components/base";
import { useLazySearchPlayersAutocompleteQuery } from "@api";

import { Player } from "@entities";
import styles from "./GameGrid.module.scss";

export type GameGridInputProps = {
  isOpen: boolean;
  onChosePlayer: (player: Player) => void;
  onCancel: () => void;
};

export function GameGridInput({ isOpen, onCancel, onChosePlayer }: GameGridInputProps) {
  const [searchPlayers, { data: players, isFetching: isSearchingPlayers }] = useLazySearchPlayersAutocompleteQuery();

  return isOpen ? (
    <div className={styles.inputWrapper}>
      <AsyncAutocomplete
        data={players || []}
        fetchOptions={searchPlayers}
        getOptionLabel={(player) => player.fullName}
        loading={isSearchingPlayers}
        label="Search players"
        onSubmit={onChosePlayer}
        checkOptionMatch={(option, value) => option.id === value.id}
        inputClassName={styles.input}
        noOptionsLabel="No players"
      />
      <div className={styles.cancelWrapper}>
        <Button variant="outlined" size="large" color="error" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  ) : null;
}
