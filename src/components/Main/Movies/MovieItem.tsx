import React, {useCallback, useEffect, useState} from "react";
import {IMovie} from './types';
import styles from './movieItem.module.css';

type Props = {
  movie: IMovie;
}
const MovieItem:React.FC<Props> = ({movie}) => {
  const onOpen = useCallback(()=>{},[]);
  return (<div className={styles.wrapper} onClick={onOpen}>
    <img src={movie.image} className={styles.image}/>
    <div className={styles.titleWrapper}>
      <div className={styles.title}>{movie.title}</div>
      <div className={styles.year}>{movie.release_date}</div>
    </div>
    <div className={styles.genre}>{movie.genre}</div>
  </div>);
}

  export default MovieItem;
