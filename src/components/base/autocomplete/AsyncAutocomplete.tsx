import { useCallback, useEffect, useMemo, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { CircularProgress, debounce } from "@mui/material";

export type AsyncAutocompleteProps<T> = {
  fetchOptions: (search: string) => void;
  loading: boolean;
  data: T[];
  getOptionLabel: (option: T) => string;
  onSubmit: (option: T) => void;
  checkOptionMatch: (option: T, value: T) => boolean;
  label: string;
  noOptionsLabel?: string;
};

export function AsyncAutocomplete<T>({
  fetchOptions,
  onSubmit,
  loading,
  data,
  getOptionLabel,
  label,
  checkOptionMatch,
  noOptionsLabel = "No options",
}: AsyncAutocompleteProps<T>) {
  const [value, setValue] = useState<T | null>(null);
  const [options, setOptions] = useState<readonly T[]>([]);

  const fetch = useMemo(
    () =>
      debounce((input: string) => {
        fetchOptions(input);
      }, 500),
    [fetchOptions],
  );

  useEffect(() => {
    setOptions(data);
  }, [data]);

  const onInputChangeHandler = useCallback(
    (inputValue: string) => {
      if (inputValue === "") {
        setOptions(value ? [value] : []);
        return;
      }

      fetch(inputValue);
    },
    [fetch],
  );

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      options={options}
      filterOptions={(x) => x}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={checkOptionMatch}
      includeInputInList
      value={value}
      noOptionsText={noOptionsLabel}
      onChange={(_event, newValue: T | null) => {
        setOptions(newValue ? [newValue] : []);
        setValue(newValue);
        if (newValue) {
          onSubmit(newValue);
        }
      }}
      onInputChange={(_event, newInputValue) => {
        onInputChangeHandler(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label={label} fullWidth>
            <CircularProgress />
          </TextField>
      )}
      loading={loading}
    />
  );
}
