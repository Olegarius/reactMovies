import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getFilterItems,
} from "./async";

export type TFilter = {
  label: string,
  value: string
}

export type TState = {
  filters: TFilter[],
  currentFilter: TFilter | null,
  loading: boolean
}

const initialState: TState = {
  filters: [],
  currentFilter: null,
  loading: true
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCurrentFilter: (state, action: PayloadAction<TFilter>) => {
      state.currentFilter = action.payload || null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFilterItems.fulfilled, (state, action: PayloadAction<TFilter[]>) => {
        state.filters = action.payload || [];
        state.loading = false;
    });
    builder.addCase(getFilterItems.pending, (state) => {
      state.filters = [];
      state.loading = true;
    });
    builder.addCase(getFilterItems.rejected, (state) => {
      state.filters = [];
      state.loading = false;
    });
  },
});

export const {setCurrentFilter} = filterSlice.actions

export {
  getFilterItems
};

export default filterSlice.reducer;
