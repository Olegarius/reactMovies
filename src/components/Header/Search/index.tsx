import React, { useCallback, useContext } from "react";
import styles from './index.module.css';
import logo from '../../../images/logo.png';
import { MovieContext } from "../../../contextProviders";

const Search:React.FC = () => {
  const [, actions] = useContext(MovieContext);
  const onSearch=useCallback(() => {}, []);
  const onAddMovieHandler = useCallback(() => actions.SET_ADD_MOVIE(true), []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img src={logo}/>
        <div className={styles.addMovie} onClick={onAddMovieHandler}>+ add movie</div>
      </div>
      <div className={styles.title}>FIND YOUR MOViE</div>
      <div className={styles.searchWrapper}>
        <input className={styles.searchInput} placeholder="What do you want to watch?"/>
        <input className={styles.searchButton} type="button" name="search" value="search" onClick={onSearch}/>
      </div>
    </div>
  );
}

  export default Search;
