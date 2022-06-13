import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './blogSlice';

export const store = configureStore({
  reducer: {
    blogSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
