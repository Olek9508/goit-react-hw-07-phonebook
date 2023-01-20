import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './ContactsSlice';
import { filterReducer } from './FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
  },
});