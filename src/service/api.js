import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://yt-api.p.rapidapi.com",
    headers: {
      "x-rapidapi-key": "32001f2eb2mshf2e31f7940dafbap1695b9jsn202bb9790c54",
      "x-rapidapi-host": "yt-api.p.rapidapi.com",
    },
  }),
  endpoints: (builder) => ({
    getTrending: builder.query({
      query: () => "trending?geo=US",
    }),
    getVideoDetails: builder.query({
      query: (id) => `video/info?id=${id}`,
    }),
  }),
});

export const { useGetTrendingQuery, useGetVideoDetailsQuery } = api;
