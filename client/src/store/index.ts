import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { authUserReducer } from './reducers/auth.slice';
import { messagesAPI } from 'services/MessagesService';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['authUser'],
};

const rootReducer = combineReducers({
    authUser: authUserReducer,
    [messagesAPI.reducerPath]: messagesAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(messagesAPI.middleware),
});

export const setupStore = () => {
    return store;
};

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type TypeRootState = ReturnType<typeof store.getState>;
