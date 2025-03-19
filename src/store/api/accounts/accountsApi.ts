import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accountsApi = createApi({
  reducerPath: "accountsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://localhost:7110/`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getMe: builder.query<any, void>({
      query: () => `/accounts/me`,
    }),
  }),
});

export const { useGetMeQuery } = accountsApi;
