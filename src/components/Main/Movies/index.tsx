import React, {useEffect, useState, useCallback, useContext, useDeferredValue} from "react";
import 'reactjs-popup/dist/index.css';
import { useSelector } from "react-redux";
import MovieItem from './MovieItem';
import EditMoviePopup from 'reactjs-popup';
import AddEditContext from '../../Popups/AddEditPopup';
import DeleteContext from '../../Popups/DeletePopup';
import { createMovie, getMovies, updateMovie } from "../../../store/slices/movies";
import {useAppDispatch} from "../../../store";
import {TFilterProps, TMovie} from '../../../api/types';
import styles from './index.module.css';
import { MovieContext } from "../../../contextProviders";
import {selectMovies, selectMovieFilters} from "../../../store/slices/movies/selectors";

const popupWrapper = {
  border: 0,
  backgroundColor: '#232323',
  padding: 0
};

const Movies:React.FC = () => {
  const dispatch = useAppDispatch();
  const moviesData = useDeferredValue(useSelector(selectMovies) ?? {});
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

  useEffect(() => {
    dispatch(getMovies(filters));
  }, [dispatch, filters]);

  useEffect(() => {
    if(addMovie) {
      onActionClick('edit');
      actions.SET_ADD_MOVIE(false);
    }
  }, [addMovie, onActionClick, actions]);

  return (<div className={styles.wrapper}>
    <div className={styles.resultsCount}>{`${moviesTotal} movies found`}</div>
    <div className={styles.moviesList}>
      {movies?.map((movie) => <MovieItem key={movie.id} movie={movie} onAction={onActionClick}/>)}
    </div>
    <EditMoviePopup open={isOpenPopup} modal onClose={onClosePopup} contentStyle={popupWrapper}>
      {contextAction === 'edit' && <AddEditContext onClose={onClosePopup} onConfirm={onSave}/>}
      {contextAction === 'delete' && <DeleteContext onClose={onClosePopup}/>}
    </EditMoviePopup>
  </div>);
}

  export default Movies;
