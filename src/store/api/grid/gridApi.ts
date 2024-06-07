import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Player } from "@entities";

import { GridItem } from "./gridApi.types";

export const gridApi = createApi({
  reducerPath: "gridApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/`,
  }),
  endpoints: (builder) => ({
    getRandomGrid: builder.query<{ x: [GridItem, GridItem, GridItem]; y: [GridItem, GridItem, GridItem] }, void>({
      query: () => "/grids/random",
    }),

    checkPlayerMatch: builder.query<{ isMatch: boolean }, { player: Player; gridItems: GridItem[] }>({
      query: ({ player, gridItems }) => ({
        url: "/grids/check-match",
        method: "POST",
        body: {
          playerId: player.id,
          item1: gridItems[0],
          item2: gridItems[1],
        },
      }),
    }),
  }),
});

export const { useGetRandomGridQuery, useLazyCheckPlayerMatchQuery } = gridApi;
