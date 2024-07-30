import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { GridItem } from "./gridApi.types";

export const gridApi = createApi({
  reducerPath: "gridApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://localhost:7110/`,
  }),
  endpoints: (builder) => ({
    getRandomGrid: builder.query<{ x: [GridItem, GridItem, GridItem]; y: [GridItem, GridItem, GridItem] }, void>({
      query: () => "/grids/random",
    }),
  }),
});

export const { useGetRandomGridQuery } = gridApi;
