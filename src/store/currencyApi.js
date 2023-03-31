import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currencyApi = createApi({
    reducerPath: 'currencyApi',
    baseQuery: fetchBaseQuery({ baseUrl:"https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange"}),
    endpoints: (builder) => ({
        getAllCurrency: builder.query({
            query: (currentDate) => `?&date=${currentDate}&json`,
        }),
        getCurrency: builder.query({
            query: ({currentDate, valcode}) => `?valcode=${valcode}&date=${currentDate}&json`,
        })
    }),
})

export const { useGetAllCurrencyQuery, useGetCurrencyQuery, useLazyGetCurrencyQuery } = currencyApi