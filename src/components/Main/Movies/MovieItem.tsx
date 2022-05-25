import React, {MouseEvent, useCallback, useState, useContext} from "react";

import ContextMenu from '../../Popups/ContextMenu';
import {TMovie} from '../../../api/types';
import styles from './movieItem.module.css';
import { MovieContext } from "../../../contextProviders";

type Props = {
  movie: TMovie;
  onAction: (action: string, movie: TMovie) => void;
}
const MovieItem:React.FC<Props> = ({movie, onAction}) => {
  const [, actions] = useContext(MovieContext);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const handleContextMenu = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      setShowContextMenu(true);
    },
    [setShowContextMenu]
  );

  const onOpenDetails = useCallback(() => {
    if (showContextMenu) {
      setShowContextMenu(false);
    }
    actions.SET_SELECTED_MOVIE(movie);
  }, [showContextMenu, setShowContextMenu, actions.SET_MOVIE]);

  const onActionClick = useCallback((action: string)=>(event: MouseEvent<HTMLDivElement>)=>{
    event.stopPropagation();
    setShowContextMenu(false);
    onAction(action, movie);
  }, [setShowContextMenu, onAction, movie]);

  return (<div className={styles.wrapper} onClick={onOpenDetails} onContextMenu={handleContextMenu}>
    <img src={movie.poster_path} className={styles.image}/>
    <div className={styles.titleWrapper}>
      <div className={styles.title}>{movie.title}</div>
      <div className={styles.year}>{movie?.release_date && (new Date(movie.release_date)).getFullYear()}</div>
    </div>
    <div className={styles.genre}>{movie?.genres?.length && movie.genres.join(', ')}</div>
    {showContextMenu && (<ContextMenu onClick={onActionClick}/>)}
  </div>);
}

  export default MovieItem;
