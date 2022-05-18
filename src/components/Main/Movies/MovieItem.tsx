import React, {MouseEvent, useCallback, useState} from "react";

import ContextMenu from '../../Popups/ContextMenu';
import {IMovie} from './types';
import styles from './movieItem.module.css';

type Props = {
  movie: IMovie;
  onAction: (action: string, movie: IMovie) => void;
}
const MovieItem:React.FC<Props> = ({movie, onAction}) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const handleContextMenu = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      setShowContextMenu(true);
    },
    [setShowContextMenu]
  );

  const onOpenDetails = useCallback(() => (showContextMenu ? setShowContextMenu(false) : null), [showContextMenu, setShowContextMenu]);
  const onActionClick = useCallback((action: string)=>()=>{onAction(action, movie)}, []);

  return (<div className={styles.wrapper} onClick={onOpenDetails} onContextMenu={handleContextMenu}>
    <img src={movie.image} className={styles.image}/>
    <div className={styles.titleWrapper}>
      <div className={styles.title}>{movie.title}</div>
      <div className={styles.year}>{movie.release_date}</div>
    </div>
    <div className={styles.genre}>{movie.genre.join(', ')}</div>
    {showContextMenu && (<ContextMenu onClick={onActionClick}/>)}
  </div>);
}

  export default MovieItem;
