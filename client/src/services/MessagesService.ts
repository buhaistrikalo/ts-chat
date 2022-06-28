import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IMessage } from 'types/IMessage';

export const messagesAPI = createApi({
    reducerPath: 'messagesAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ['Messages'],
    endpoints: (build) => ({
        fetchAllMessages: build.query<IMessage[], any>({
            query: () => ({
                url: '/messages',
            }),
            providesTags: (result) => ['Messages'],
        }),
        createMessage: build.mutation<IMessage, IMessage>({
            query: (message) => ({
                url: '/messages',
                method: 'POST',
                body: message,
            }),
            invalidatesTags: ['Messages'],
        }),
        updateMessage: build.mutation<IMessage, IMessage>({
            query: (message) => ({
                url: `/messages/${message.id}`,
                method: 'PUT',
                body: message,
            }),
            invalidatesTags: ['Messages'],
        }),
        removeMessage: build.mutation<IMessage, IMessage>({
            query: (message) => ({
                url: `/messages/${message.id}`,
                method: 'DELETE',
                body: message,
            }),
            invalidatesTags: ['Messages'],
        }),
    }),
});
