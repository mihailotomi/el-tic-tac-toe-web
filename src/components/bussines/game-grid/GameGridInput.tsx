import { Button } from "@mui/material";

import { AsyncAutocomplete } from "@components/base";
import { useLazySearchPlayersAutocompleteQuery } from "@api";

import styles from "./GameGrid.module.scss";

export type GameGridInputProps = {
  isOpen: boolean;
};

export function GameGridInput({ isOpen }: GameGridInputProps) {
  const [searchPlayers, { data: players, isFetching: isSearchingPlayers }] = useLazySearchPlayersAutocompleteQuery();

  return isOpen ? (
    <div className={styles.inputWrapper}>
      <AsyncAutocomplete
        data={players || []}
        fetchOptions={searchPlayers}
        getOptionLabel={(player) => player.fullName}
        loading={isSearchingPlayers}
        label="Search players"
        onSubmit={console.log}
        checkOptionMatch={(option, value) => option.id === value.id}
        inputClassName={styles.input}
        noOptionsLabel="No players"
      />
      <div className={styles.cancelWrapper}>
        <Button variant="outlined" size="large" color="error">Cancel</Button>
      </div>
    </div>
  ) : null;
}
