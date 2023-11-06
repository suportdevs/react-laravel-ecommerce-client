import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BACKEND_BASE_URL}),
    endpoints: (builder) => ({
        csrf: builder.query({
            query: () => ({
                url: '/sanctum/csft-token',
            }),
        }),
        register: builder.mutation({
            query: ({data}) => ({
                url: '/register',
                method: 'POST',
                body: data,
            }),
        }),
        login: builder.mutation({
            query: ({data}) => ({
                url: '/login',
                method: 'POST',
                body: data
            }),
        }),
    }),
});

export const {getCrsftQuery, getRegisterMutation, getLoginMutation} = authApi