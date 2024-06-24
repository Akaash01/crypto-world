import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeader = {
  'X-RapidAPI-Key': '9c2f91d720mshabe815922db7cc1p181caajsn883ffbbc5f3f',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};
const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url) => ({ url, headers: cryptoApiHeader });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getExchanges: builder.query({
      query: () => createRequest(`/exchanges`)
    }),
    getCryptosDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
    })
  })
});

export const {
  useGetCryptosQuery,
  useGetCryptosDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery
} = cryptoApi;
