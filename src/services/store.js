import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import { authApi } from "./authApi";
import userSlice from "./userSlice";
import { webApi } from "./webApi";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [webApi.reducerPath]: webApi.reducer,
        user: userSlice,
        cart: cartSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware).concat(webApi.middleware),
});

setupListeners(store.dispatch);