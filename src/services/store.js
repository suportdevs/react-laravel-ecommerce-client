import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import { authApi } from "./authApi";
import userSlice from "./userSlice";
import { webApi } from "./webApi";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [webApi.reducerPath]: webApi.reducer,
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware).concat(webApi.middleware),
});

setupListeners(store.dispatch);