
import {IMovie} from '../../components/Main/Movies/types';

export interface State {
  movie: IMovie | null;
  selectedMovie: IMovie | null;
  addMovieOpened: boolean;
}

export interface Action {
  type: string;
  payload?: IMovie;
}
