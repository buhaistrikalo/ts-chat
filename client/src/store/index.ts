import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authUserReducer } from "./reducers/auth.slice";

const rootReducer = combineReducers({
    authUser: authUserReducer,
})

const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware()
    //         .concat(todoAPI.middleware)
})

export const setupStore = () => {
    return store
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type TypeRootState = ReturnType<typeof store.getState>