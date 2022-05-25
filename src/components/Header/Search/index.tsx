import React, { useCallback, useContext, useState } from "react";
import styles from './index.module.css';
import logo from '../../../images/logo.png';
import { MovieContext } from "../../../contextProviders";
import { useSelector } from "react-redux";
import {useAppDispatch} from "../../../store";
import {selectMovieFilters} from "../../../store/slices/movies/selectors";
import { setMovieFilter } from "../../../store/slices/movies";

const Search:React.FC = () => {
  const dispatch = useAppDispatch();
  const movieFilters = useSelector(selectMovieFilters);
  const search = movieFilters?.search || "";

  const [searchValue, setSearchValue] = useState(search);
  const [, actions] = useContext(MovieContext);

  const onSearch = () => dispatch(setMovieFilter({search: searchValue}));
  const onAddMovieHandler = useCallback(() => actions.SET_ADD_MOVIE(true), []);
  const onChangeSearch = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const searchValue = e?.currentTarget?.value || "";
    setSearchValue(searchValue);
  }, [setSearchValue]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img src={logo}/>
        <div className={styles.addMovie} onClick={onAddMovieHandler}>+ add movie</div>
      </div>
      <div className={styles.title}>FIND YOUR MOViE</div>
      <div className={styles.searchWrapper}>
        <input className={styles.searchInput} onChange={onChangeSearch} value={searchValue} placeholder="What do you want to watch?"/>
        <input className={styles.searchButton} type="button" name="search" value="search" onClick={onSearch}/>
      </div>
    </div>
  );
}

  export default Search;
