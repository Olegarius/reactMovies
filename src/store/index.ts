import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'

import movies from "./slices/movies";
import filters from "./slices/filters";

const rootReducer = combineReducers({
  movies,
  filters
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
