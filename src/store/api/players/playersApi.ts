import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Player } from "@entities";

import { PlayerConstraint } from "./playersApi.types";

export const playersApi = createApi({
  reducerPath: "playersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://localhost:7110/`,
  }),
  endpoints: (builder) => ({
    searchPlayersAutocomplete: builder.query<Player[], string>({
      query: (search) => `/players/autocomplete?search=${search}`,
    }),

    checkPlayerConstraints: builder.query<boolean, { player: Player; constraints: PlayerConstraint[] }>({
      query: ({ player, constraints }) => ({
        url: `/players/check-constraints/${player.id}`,
        method: "POST",
        body: constraints,
      }),
    }),
  }),
});

export const { useLazySearchPlayersAutocompleteQuery, useLazyCheckPlayerConstraintsQuery } = playersApi;
