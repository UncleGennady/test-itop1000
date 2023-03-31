import { configureStore } from '@reduxjs/toolkit'
import {currencyApi} from "./currencyApi";

export const store = configureStore({
    reducer: {
        [currencyApi.reducerPath]: currencyApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(currencyApi.middleware),
})