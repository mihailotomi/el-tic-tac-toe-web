import { useMemo, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { debounce } from "@mui/material";

export type AsyncAutocompleteProps<T> = {
  fetchOptions: (search: string) => void;
  loading: boolean;
  options: T[];
  getOptionLabel: (option: T) => string;
  onSubmit: (option: T) => void;
  checkOptionMatch: (option: T, value: T) => boolean;
  label: string;
  noOptionsLabel?: string;
  inputClassName?: string;
};

export function AsyncAutocomplete<T>({
  fetchOptions,
  onSubmit,
  loading,
  options,
  getOptionLabel,
  label,
  checkOptionMatch,
  noOptionsLabel = "No options",
  inputClassName = "",
}: AsyncAutocompleteProps<T>) {
  const [value, setValue] = useState<T | null>(null);

  const fetch = useMemo(
    () =>
      debounce((input: string) => {
        fetchOptions(input);
      }, 500),
    [fetchOptions],
  );

  const onInputChangeHandler = (inputValue: string) => {
    if (inputValue !== "") {
      fetch(inputValue);
    }
  };

  const onChangeHandler = (newValue: T | null) => {
    setValue(newValue);
    if (newValue) {
      onSubmit(newValue);
    }
  };

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ flexGrow: 1, maxHeight: "100%" }}
      options={options}
      filterOptions={(x) => x}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={checkOptionMatch}
      includeInputInList
      value={value}
      noOptionsText={noOptionsLabel}
      onChange={(_event, newValue: T | null) => {
        onChangeHandler(newValue);
      }}
      onInputChange={(_event, newInputValue) => {
        onInputChangeHandler(newInputValue);
      }}
      renderInput={(params) => <TextField {...params} label={label} className={inputClassName} fullWidth />}
      loading={loading}
    />
  );
}
