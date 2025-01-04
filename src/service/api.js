import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://yt-api.p.rapidapi.com",
    headers: {
      "x-rapidapi-key": "324e748e03mshf80f3aefff00d16p184f98jsnacff41ee74e4",
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
    getSuggestedVideos: builder.query({
      query: (id) => `related?id=${id}`, 
    }),
  }),
});

export const {
  useGetTrendingQuery,
  useGetVideoDetailsQuery,
  useGetSuggestedVideosQuery, 
} = api;
