import { countryCodeLongToShort } from "@lib";

export const getCountryFlagUrl = (code: string) =>
  `https://flagcdn.com/256x192/${countryCodeLongToShort(code)?.toLowerCase()}.png`;
