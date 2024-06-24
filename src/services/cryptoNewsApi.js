import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '9c2f91d720mshabe815922db7cc1p181caajsn883ffbbc5f3f',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};

const baseUrl = 'https://bing-search-apis.p.rapidapi.com';

const createRequest = (url) => {
  console.log({ url, header: cryptoNewsHeaders });
  return { url, headers: cryptoNewsHeaders };
};

export const cryptoNewsApi = createApi({
  reducerPath: 'crytoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&textFormat=Raw&freshness=Day&count=${count}`
        )
    })
  })
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
