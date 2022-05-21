import actionTypes from './actionTypes';
import {State, Action} from './reducer.types';

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_MOVIE:
      return {...state, ...{movie: action?.payload ?? ''}};
    case actionTypes.SET_SELECTED_MOVIE:
      return {...state, ...{selectedMovie: action?.payload ?? ''}};
    case actionTypes.SET_ADD_MOVIE:
      return {...state, ...{addMovieOpened: action?.payload ?? false}};
    default:
      return state;
  }
};

export default reducer;
