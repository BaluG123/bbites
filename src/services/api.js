import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://smartupsc.pythonanywhere.com/api',
  }),
  endpoints: builder => ({
    getPrelimsByFilter: builder.query({
      query: ({subject, classNumber}) => ({
        url: '/questions/prelims/filter/',
        params: {
          subject,
          class_number: classNumber,
        },
      }),
    }),

    getMainsByFilter: builder.query({
      query: ({subject, classNumber}) => ({
        url: '/questions/mains/filter/',
        params: {
          subject,
          class_number: classNumber,
        },
      }),
    }),

    getChapters: builder.query({
      query: () => ({
        url: '/chapters/',
      }),
    }),
  }),
});

export const {
  useGetPrelimsByFilterQuery,
  useGetMainsByFilterQuery,
  useGetChaptersQuery,
} = api;
