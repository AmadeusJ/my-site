import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import projectReducer from './slices/projectSlice';
import commonReducer from './slices/commonSlice';
import contactReducer from './slices/contactSlice';
import websocketReducer from './slices/websocketSlice';

export const store = configureStore({
  reducer: {
    common: commonReducer,
    projects: projectReducer,
    contact: contactReducer,
    websocket: websocketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
