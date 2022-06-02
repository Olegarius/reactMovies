import React, { useCallback, useContext, useEffect, useState, useTransition } from "react";
import styles from './index.module.css';
import logo from '../../../images/logo.png';
import { MovieContext } from "../../../contextProviders";
import { useSelector } from "react-redux";
import {useAppDispatch} from "../../../store";
import {selectMovieFilters} from "../../../store/slices/movies/selectors";
import { setMovieFilter } from "../../../store/slices/movies";
import { useParams, useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import { generatePath } from "react-router";

const Search:React.FC = () => {
  const { '*': searchQuery} = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchURLString = Object.fromEntries(searchParams);
  const dispatch = useAppDispatch();
  const movieFilters = useSelector(selectMovieFilters);
  const search = movieFilters?.search || searchQuery;
  const [isPending, startTransistion] = useTransition();

  const [searchValue, setSearchValue] = useState(search);
  const [filterValue, setFilterValue] = useState(search);
  const [, actions] = useContext(MovieContext);

  useEffect(() => {
    dispatch(setMovieFilter({search: filterValue}));
  }, [filterValue]);

  const onSearch = () => dispatch(setMovieFilter({search: filterValue}));
  const onAddMovieHandler = useCallback(() => actions.SET_ADD_MOVIE(true), []);
  const onChangeSearch = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const searchValue = e?.currentTarget?.value || "";
    setSearchValue(searchValue);
    const pathname = generatePath("/search/*", {"*": searchValue});
    navigate({
      pathname,
      search: createSearchParams(searchURLString).toString()
    }, { replace: true });
    startTransistion(() => {
      setFilterValue(searchValue);
    });
  }, [searchURLString, navigate, dispatch, setSearchValue, setFilterValue, startTransistion]);

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
