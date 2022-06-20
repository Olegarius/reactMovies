import { TMovie } from 'api/types';
import types from './actionTypes';

const actions = {
  [types.SET_MOVIE]: (dispatch: React.Dispatch<any>) => (movie: TMovie | null) => {
    dispatch({
      type: types.SET_MOVIE,
      payload: movie,
    });
  },
  [types.SET_SELECTED_MOVIE]: (dispatch: React.Dispatch<any>) => (movie: TMovie | null) => {
    dispatch({
      type: types.SET_SELECTED_MOVIE,
      payload: movie,
    });
  },
  [types.SET_ADD_MOVIE]: (dispatch: React.Dispatch<any>) => (addMovieOpened: boolean) => {
    dispatch({
      type: types.SET_ADD_MOVIE,
      payload: addMovieOpened,
    });
  },
};

export default actions;
