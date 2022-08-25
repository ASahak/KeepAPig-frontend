import { configureStore, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './rootReducer';
import ListenerMiddleware from './middlware';
import { api } from '@/graphql/user/mutations/index.graphql-gen';

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api.middleware]).prepend(ListenerMiddleware.middleware)
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
export const useAppDispatch = () => useDispatch();
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
