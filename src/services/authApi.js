import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api'}),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data,
            }),
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data,
            }),
        }),
        sendEmailVerifyMail: builder.query({
            query: (id) => `/send/email/verify-link/${id}`
        }),
        emailVerify: builder.query({
            query: ({id, hash}) => `/email/verify/${id}/${hash}`
        }),
        passwordResetLink: builder.mutation({
            query: (data) => ({
                url: '/forgot-password',
                method: 'POST',
                body: data,
            }),
        }),
        newPassword: builder.mutation({
            query: (data) => ({
                url: '/reset-password',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {useRegisterMutation, useLoginMutation, useEmailVerifyQuery, useSendEmailVerifyMailQuery, usePasswordResetLinkMutation, useNewPasswordMutation} = authApi;