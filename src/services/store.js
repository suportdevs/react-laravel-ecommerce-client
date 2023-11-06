import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);