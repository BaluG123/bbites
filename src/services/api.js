// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// export const api = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://smartupsc.pythonanywhere.com/api',
//   }),
//   endpoints: builder => ({
//     getPrelimsByFilter: builder.query({
//       query: ({subject, classNumber}) => ({
//         url: `/questions/prelims/filter/`,
//         params: {
//           subject,
//           class_number: classNumber,
//         },
//       }),
//       transformResponse: response => response,
//       providesTags: ['Prelims'],
//     }),

//     getMainsByFilter: builder.query({
//       query: ({subject, classNumber}) => ({
//         url: `/questions/mains/filter/`,
//         params: {
//           subject,
//           class_number: classNumber,
//         },
//       }),
//       transformResponse: response => response,
//       providesTags: ['Mains'],
//     }),
//   }),
// });

// export const {useGetPrelimsByFilterQuery, useGetMainsByFilterQuery} = api;

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://smartupsc.pythonanywhere.com/api',
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
  }),
});

export const {useGetPrelimsByFilterQuery, useGetMainsByFilterQuery} = api;
