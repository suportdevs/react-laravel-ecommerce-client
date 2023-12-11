import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const webApi = createApi({
    reducerPath: 'webApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api'}),
    endpoints: (builder) => ({
        getProducts: builder.mutation({
            query: (category) => ({
                url: `/products`,
                method: 'POST',
                body: category,
            }),
        }),
        getCategories: builder.query({
            query: () => `/categories`,
        }),
        getColors: builder.query({
            query: () => `/colors`,
        }),
        getSizes: builder.query({
            query: () => `/sizes`,
        }),
        // getCategories: builder.mutation({
        //     query: () => ({
        //         url: `/categories`,
        //         method: 'POST',
        //     }),
        // }),
    }),
});

export const {useGetProductsMutation, useGetCategoriesQuery, useGetColorsQuery, useGetSizesQuery} = webApi;