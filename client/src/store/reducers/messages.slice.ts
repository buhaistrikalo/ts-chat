import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { IMessage } from 'types/IMessage';

const initialState: IMessage[] = [];

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        createMessage: (state, action: PayloadAction<IMessage>) =>              [...state, action.payload]
        
    },
});

export const messagesReducer = messagesSlice.reducer;
export const messagesActions = messagesSlice.actions;
