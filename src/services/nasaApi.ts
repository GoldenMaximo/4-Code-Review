import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TApodResponse } from '../interfaces/apod/TApodResponse';

interface IApodQueryData {
    apiKey: string;
    count: number;
}

// https://github.com/nasa/apod-api
export const nasaApi = createApi({
    reducerPath: 'nasaApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_NASA_PLANETARY_ENDPOINT,
    }),
    endpoints: builder => ({
        getApod: builder.query<TApodResponse, IApodQueryData>({
            query: ({ apiKey, count }: IApodQueryData) => `apod?api_key=${apiKey}&count=${count}`,
        }),
    }),
});

export const { useGetApodQuery } = nasaApi;
