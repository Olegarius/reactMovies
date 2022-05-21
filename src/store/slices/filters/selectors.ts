import { AppState } from "../../types";

const selectSelf = (state: AppState) => state.filters;

export const selectFilters = (state: AppState) => selectSelf(state).filters;
export const selectCurrentFilter = (state: AppState) => selectSelf(state).currentFilter;
