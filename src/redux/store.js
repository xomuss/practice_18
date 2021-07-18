import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./redusers";


export const store = configureStore(
    {
        reducer: modalReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
        devTools: process.env.NODE_ENV !== 'production',
    }
);
