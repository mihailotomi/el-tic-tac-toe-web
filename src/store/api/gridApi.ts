import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Club } from "src/entities";

export const gridApi = createApi({
  reducerPath: "gridApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/`,
  }),
  endpoints: (builder) => ({
    getRandomGrid: builder.query<{ x: [Club, Club, Club], y: [Club, Club, Club] }, void>({
      query: () => "/grids/random",
    }),
  }),
});

export const { useLazyGetRandomGridQuery } = gridApi;
