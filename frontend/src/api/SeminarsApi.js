import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//создаем api для запросов на сервер
export const seminarsApi = createApi({
  reducerPath: 'seminarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/seminars'}),
  endpoints: (builder) => ({
    //получение данных
    getSeminars: builder.query({
      query: () => '',
      providesTags: ['Seminars'],
    }),
    //редактирование данных
    editSeminar: builder.mutation({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Seminars'],
    }),
    //удаление данных
    removeSeminar: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Seminars'],
    }),
  }),
});

export const {
  useGetSeminarsQuery, useEditSeminarMutation, useRemoveSeminarMutation,
} = seminarsApi;