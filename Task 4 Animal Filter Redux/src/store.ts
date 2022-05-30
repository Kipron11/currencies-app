import { configureStore } from '@reduxjs/toolkit';
import animalSlice from './reducer/animalSlice';

export const store = configureStore({
  reducer: {
    animals: animalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
