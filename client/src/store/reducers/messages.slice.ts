import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessage } from 'types/IMessage';
import { fetchMessages } from './actionCreators';

interface MessagesState {
    messages: IMessage[];
    isLoading: boolean;
    error: string;
}

const initialState: MessagesState = {
    messages: [],
    isLoading: false,
    error: '',
};

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchMessages.fulfilled.type]: (state, action: PayloadAction<IMessage[]>) => {
            state.isLoading = false;
            state.error = '';
            state.messages = action.payload;
        },
        [fetchMessages.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchMessages.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default messagesSlice.reducer;
