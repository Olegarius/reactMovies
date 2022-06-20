import React, {useReducer, createContext} from 'react';
import {useActions} from 'hooks';
import reducer from './reducer';
import actionCreators from './actions';
import types from './actionTypes';
import {State} from './reducer.types';

const initialState: State = {
  selectedMovie: null,
  movie: null,
  addMovieOpened: false,
};

export const MovieContext = createContext<any[]>([initialState, {}]);

export interface IMovieProvider {
  children?: React.ReactNode | JSX.Element;
}

export const MovieProvider: React.FC<IMovieProvider> = ({children}) => {
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  const actions = useActions(types, dispatch, actionCreators);

  return (
    <MovieContext.Provider value={[state, actions]}>
      {children}
    </MovieContext.Provider>
  );
};
