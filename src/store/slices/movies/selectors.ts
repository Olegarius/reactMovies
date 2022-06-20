import { AppState } from "store/types";

const selectSelf = (state: AppState) => state.movies;

export const selectMovieFilters = (state: AppState) => selectSelf(state).filters;

export const selectMovies = (state: AppState) => selectSelf(state).movies;

export const selectSelectedMovie = (state: AppState) => selectSelf(state).selectedMovie;
