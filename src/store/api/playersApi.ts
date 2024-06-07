import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Player } from "@entities";

export const playersApi = createApi({
  reducerPath: "playersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/`,
  }),
  endpoints: (builder) => ({
    searchPlayersAutocomplete: builder.query<Player[], string>({
      query: (search) => `/players/search-autocomplete?search=${search}`,
    }),
  }),
});

export const { useLazySearchPlayersAutocompleteQuery } = playersApi;
