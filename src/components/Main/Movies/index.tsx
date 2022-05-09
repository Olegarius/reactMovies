import React, {useEffect, useState} from "react";
import MovieItem from './MovieItem';
import { getMovies } from "../../../api";
import {Props, IMovie} from './types';
import styles from './index.module.css';

const Movies:React.FC<Props> = ({filter, sort}) => {
  const [movies, setMovies] = useState<IMovie[] | null>(null);
  useEffect(() => {
    (async() => setMovies(await getMovies({filter, sort})))();
  }, [setMovies]);

  return (<div className={styles.wrapper}>
    <div className={styles.resultsCount}>{`${movies?.length || 0} movies found`}</div>
    <div className={styles.moviesList}>
      {movies?.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
    </div>
  </div>);
}

  export default Movies;
