import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Club, Player } from "@entities";

export const playersApi = createApi({
  reducerPath: "playersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/`,
  }),
  endpoints: (builder) => ({
    searchPlayersAutocomplete: builder.query<Player[], string>({
      query: (search) => `/players/search-autocomplete?search=${search}`,
    }),

    checkPlayerMatch: builder.query<{ isMatch: boolean }, { player: Player; clubs: Club[] }>({
      query: ({ player, clubs }) =>
        `/players/check-match?playerId=${player.id}&clubIds=${clubs.map((club) => `${club.id}`).join(",")}`,
    }),
  }),
});

export const { useLazySearchPlayersAutocompleteQuery, useLazyCheckPlayerMatchQuery } = playersApi;
