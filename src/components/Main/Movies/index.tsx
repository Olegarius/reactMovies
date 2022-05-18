import React, {useEffect, useState, useCallback} from "react";
import MovieItem from './MovieItem';
import EditMoviePopup from 'reactjs-popup';
import AddEditContext from '../../Popups/AddEditPopup';
import DeleteContext from '../../Popups/DeletePopup';
import { getMovies } from "../../../api";
import {Props, IMovie} from './types';
import styles from './index.module.css';
import 'reactjs-popup/dist/index.css';

const popupWrapper = {
  border: 0,
  backgroundColor: '#232323',
  padding: 0
};

const Movies:React.FC<Props> = ({filter, sort, addMovie = false}) => {
  const [movies, setMovies] = useState<IMovie[] | null>(null);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [contextAction, setContextAction] = useState<string>('');
  const [currentMovie, setCurrentMovie] = useState<IMovie | undefined>();

  const onActionClick = useCallback((action: string, movie?: IMovie)=>{
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
    setCurrentMovie(movie);
    setContextAction(action);
  },[setIsOpenPopup, setContextAction]);
  const onClosePopup=useCallback(()=>{setIsOpenPopup(false)},[setIsOpenPopup]);
  const onSave = useCallback((data: IMovie | {})=>{
    //TODO: save data
  },[]);

  useEffect(() => {
    (async() => setMovies(await getMovies({filter, sort})))();
  }, [setMovies]);

  useEffect(() => {
    if(addMovie) {
      onActionClick('edit');
    }
  }, [addMovie, onActionClick]);

  return (<div className={styles.wrapper}>
    <div className={styles.resultsCount}>{`${movies?.length || 0} movies found`}</div>
    <div className={styles.moviesList}>
      {movies?.map((movie) => <MovieItem key={movie.id} movie={movie} onAction={onActionClick}/>)}
    </div>
    <EditMoviePopup open={isOpenPopup} modal onClose={onClosePopup} contentStyle={popupWrapper}>
      {contextAction === 'edit' && <AddEditContext movie={currentMovie} onClose={onClosePopup} onConfirm={onSave}/>}
      {contextAction === 'delete' && <DeleteContext id={currentMovie?.id || 0} onClose={onClosePopup}/>}
    </EditMoviePopup>
  </div>);
}

  export default Movies;
