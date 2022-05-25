
import {TMovie} from '../../api/types';

export interface State {
  movie: TMovie | null;
  selectedMovie: TMovie | null;
  addMovieOpened: boolean;
}

export interface Action {
  type: string;
  payload?: TMovie;
}
