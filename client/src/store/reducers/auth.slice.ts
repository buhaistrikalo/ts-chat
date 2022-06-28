import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'types/IUser';

const initialState: IUser = {
    id: 0,
    name: '',
};

export const authUserSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        authUser: (state, action: PayloadAction<IUser>) => {
            console.log('✅ Успешная авторизация')
            return { ...action.payload };
        },
    },
});

export const authUserReducer = authUserSlice.reducer;
export const authUserActions = authUserSlice.actions;
