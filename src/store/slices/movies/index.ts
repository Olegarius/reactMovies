import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SORT_ORDER } from "const";
import {TMovie, TFilterProps} from "api/types";

import {
  getMovie,
  getMovies,
  createMovie,
  updateMovie,
  removeMovie
} from "./async";

export type TMovieState = {
  data: TMovie[],
  totalAmount?: number,
  offset?: number,
  limit?: number
}

export type TState = {
  movies: TMovieState,
  selectedMovie: TMovie | null,
  loading: boolean,
  filters: TFilterProps,
}

const initialState: TState = {
  movies: {
    data: []
  },
  selectedMovie: null,
  loading: true,
  filters: {
    sortOrder: SORT_ORDER.ASC,
    offset: 0,
    limit: 120
  }
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSelectedMovie: (state, action: PayloadAction<TMovie>) => {
      state.selectedMovie = action.payload || null;
    },
    setMovieFilter: (state: TState, action: PayloadAction<TFilterProps>) => {
        state.filters = {...state.filters, ...action.payload};
      }
  },
  extraReducers: (builder) => {
    //getMovies
    builder.addCase(getMovies.fulfilled,
      (state: TState, action: PayloadAction<TMovieState>) => {
        state.movies = action.payload || { data: []};
        state.loading = false;
      }
    );
    builder.addCase(getMovies.pending, (state) => {
      state.movies.data = [];
      state.loading = true;
    });
    builder.addCase(getMovies.rejected, (state) => {
      state.movies.data = [];
      state.loading = false;
    });
    //getMovie
    builder.addCase(getMovie.fulfilled,
      (state, action: PayloadAction<TMovie>) => {
        state.selectedMovie = action.payload || null;
        state.loading = false;
      }
    );
    builder.addCase(getMovie.pending, (state) => {
      state.selectedMovie = null;
      state.loading = true;
    });
    builder.addCase(getMovie.rejected, (state) => {
      state.selectedMovie = null;
      state.loading = false;
    });
    //removeMovie
    builder.addCase(removeMovie.fulfilled, (state, action: any) => {
        const movieId = action?.meta?.arg || 0;
        if (state?.selectedMovie?.id === movieId) {
          state.selectedMovie = null;
        }
        state.movies.data = state.movies.data.filter((movie: TMovie) => movie.id !== movieId);
    });
    //updateMovie
    builder.addCase(updateMovie.fulfilled,
      (state, action: PayloadAction<TMovie>) => {
        if (action.payload.id === state.selectedMovie?.id) {
          state.selectedMovie = action.payload;
        }
        state.movies.data = state.movies.data.map((movie: TMovie) => movie.id === action.payload.id ? action.payload : movie);
        state.loading = false;
    });
    builder.addCase(updateMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateMovie.rejected, (state) => {
      state.loading = false;
    });
    //createMovie
    builder.addCase(createMovie.fulfilled,
      (state, action: PayloadAction<TMovie>) => {
        state.movies.data.push(action.payload);;
        state.loading = false;
    });
    builder.addCase(createMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createMovie.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {setSelectedMovie, setMovieFilter} = movieSlice.actions

export {
  getMovie,
  getMovies,
  createMovie,
  updateMovie,
  removeMovie
};

export default movieSlice.reducer;
