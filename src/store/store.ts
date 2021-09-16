import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { githubApi } from '../services/githubApi';
import { nasaApi } from '../services/nasaApi';

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        [nasaApi.reducerPath]: nasaApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(githubApi.middleware, nasaApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
