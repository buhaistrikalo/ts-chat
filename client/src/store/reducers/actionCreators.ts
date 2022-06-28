import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { IMessage } from 'types/IMessage';

export const fetchMessages = createAsyncThunk('messages/fetchAll', async (_, thinkAPI) => {
    try {
        const response = await axios.get<IMessage[]>('http://localhost:3001/messages');
        return response.data;
    } catch (e) {
        return thinkAPI.rejectWithValue('Не удалось загрузить таски');
    }
});
