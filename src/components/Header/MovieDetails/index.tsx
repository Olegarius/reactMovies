import React, { useCallback, useContext } from "react";
import styles from './index.module.css';
import { MovieContext } from "../../../contextProviders";
import searchUrl from "../../../images/search.svg";
import {getDuration} from "../../../helpers/converters";
import { useSearchParams } from "react-router-dom";

const MovieDetails:React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieString = Object.fromEntries(searchParams)
  const [{selectedMovie: movie}, actions] = useContext(MovieContext);
  const onSearchHandler = useCallback(() => {
    setSearchParams({...movieString, movie: ""}, { replace: true });
    actions.SET_SELECTED_MOVIE(null);
  }, [movieString, setSearchParams, actions.SET_SELECTED_MOVIE]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoSearchWrapper}>
        <div className={styles.logo}>netflixroulette</div>
        <div className={styles.search} onClick={onSearchHandler}><img src={searchUrl}/></div>
      </div>
      <div className={styles.contentWrapper}>
        <img className={styles.image} src={movie?.poster_path}/>
        <div className={styles.descriptionWrapper}>
          <div className={styles.titleRatingWrapper}>
            <div className={styles.title}>{movie?.title}</div>
            <div className={styles.rating}>{movie?.vote_average}</div>
          </div>
          <div className={styles.genre}>{movie?.genres.join(", ")}</div>
          <div className={styles.yearDurationWrapper}>
            <div className={styles.year}>{movie?.release_date && (new Date(movie.release_date)).getFullYear()}</div>
            <div className={styles.duration}>{getDuration(movie?.runtime || 0)}</div>
          </div>
          <div className={styles.description}>{movie?.overview}</div>
        </div>
      </div>
    </div>
  );
}

  export default MovieDetails;
