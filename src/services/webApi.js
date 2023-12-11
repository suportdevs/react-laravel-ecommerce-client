import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const webApi = createApi({
    reducerPath: 'webApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api'}),
    endpoints: (builder) => ({
        getProducts: builder.mutation({
            query: (category) => ({
                url: `/categories`,
                method: 'POST',
                body: category,
            }),
        }),
    }),
});

export const {useGetProductsMutation} = webApi;