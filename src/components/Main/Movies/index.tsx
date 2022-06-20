import React, {useEffect, useState, useCallback, useContext, useDeferredValue, useRef} from "react";
import 'reactjs-popup/dist/index.css';
import { useSelector } from "react-redux";
import MovieItem from './MovieItem';
import EditMoviePopup from 'reactjs-popup';
import AddEditContext from 'components/Popups/AddEditPopup';
import DeleteContext from 'components/Popups/DeletePopup';
import { createMovie, getMovies, getMovie, updateMovie } from "store/slices/movies";
import {useAppDispatch} from "store";
import {TFilterProps, TMovie} from 'api/types';
import * as Styled from './styles';
import { MovieContext } from "contextProviders";
import {selectMovies, selectMovieFilters, selectSelectedMovie} from "store/slices/movies/selectors";
import { useSearchParams } from "react-router-dom";

const popupWrapper = {
  border: 0,
  backgroundColor: '#232323',
  padding: 0
};

const Movies:React.FC = () => {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("movie");
  const dispatch = useAppDispatch();
  const moviesData = useDeferredValue(useSelector(selectMovies) ?? {});
  const selectedMovieId = useSelector(selectSelectedMovie) ?? null;
  const movies = moviesData?.data ?? [];
  const moviesTotal = moviesData?.totalAmount ?? 0;
  const [{addMovieOpened: addMovie}, actions] = useContext(MovieContext);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [contextAction, setContextAction] = useState<string>('');
  const filters: TFilterProps = useSelector(selectMovieFilters);

  const onActionClick = useCallback((action: string, movie?: TMovie)=>{
    switch(action) {
      case 'edit':
        setIsOpenPopup(true);
        break;
      case 'delete':
        setIsOpenPopup(true);
        break;
      default:
        setIsOpenPopup(false);
    };
    actions.SET_MOVIE(movie);
    setContextAction(action);
  },[actions, setIsOpenPopup, setContextAction]);
  const onClosePopup=useCallback(()=>{setIsOpenPopup(false)},[setIsOpenPopup]);
  const onSave = useCallback((data: TMovie)=>{
    if (data.id) {
      dispatch(updateMovie(data));
    } else {
      dispatch(createMovie(data));
    }
    setIsOpenPopup(false);
  },[dispatch, setIsOpenPopup]);

  const timeout = useRef<null | ReturnType<typeof setTimeout>>(null);
  useEffect(() => {
    if(timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      dispatch(getMovies(filters));
    }, 100);
  }, [dispatch, filters, timeout]);


  useEffect(() => {
    if (movieId && !selectedMovieId) {
      dispatch(getMovie(movieId));
   } else if (movieId && selectedMovieId) {
      actions.SET_SELECTED_MOVIE(selectedMovieId);
   } else {
      actions.SET_SELECTED_MOVIE(null);
   }
  }, [actions, movieId, selectedMovieId]);

  useEffect(() => {
    if(addMovie) {
      onActionClick('edit');
      actions.SET_ADD_MOVIE(false);
    }
  }, [addMovie, onActionClick, actions]);

  return (<Styled.Wrapper>
    <Styled.ResultsCount>{`${moviesTotal} movies found`}</Styled.ResultsCount>
    <Styled.MoviesList>
      {movies?.map((movie) => <MovieItem key={movie.id} movie={movie} onAction={onActionClick}/>)}
    </Styled.MoviesList>
    <EditMoviePopup open={isOpenPopup} modal onClose={onClosePopup} contentStyle={popupWrapper}>
      {contextAction === 'edit' && <AddEditContext onClose={onClosePopup} onConfirm={onSave}/>}
      {contextAction === 'delete' && <DeleteContext onClose={onClosePopup}/>}
    </EditMoviePopup>
  </Styled.Wrapper>);
}

  export default Movies;
