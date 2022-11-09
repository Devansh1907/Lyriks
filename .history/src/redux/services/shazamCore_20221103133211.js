import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: () => {
                headers.set('X-RapidAPI-Key', '620e5f5fe1msh3440b999da625e1p191f6djsn06c5af6b63a6');

                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/world'}),
        }),
    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;