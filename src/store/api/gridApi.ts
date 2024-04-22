import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gridApi = createApi({
  reducerPath: "gridApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/`,
  }),
  endpoints: (builder) => ({
    getRandomGrid: builder.query<{ x: string[] }, void>({
      query: () => "/grids/random",
    }),
  }),
});

export const { useLazyGetRandomGridQuery } = gridApi;
