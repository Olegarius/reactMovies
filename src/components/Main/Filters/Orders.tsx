import React, {useCallback, useEffect} from "react";
import OrderSelect from './OrederSelect';
import { useSelector } from "react-redux";
import {useAppDispatch} from "../../../store";
import {selectMovieFilters} from "../../../store/slices/movies/selectors";
import { setMovieFilter } from "../../../store/slices/movies";
import { SORT_VALUES } from "../../../const";
import styles from './index.module.css';
import { useSearchParams } from "react-router-dom";

const Orders:React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchURLString = Object.fromEntries(searchParams)
  const dispatch = useAppDispatch();
  const movieFilters = useSelector(selectMovieFilters);
  const orderBy = searchParams.get("genre") || movieFilters?.searchBy || SORT_VALUES.TITLE;

  const onChangeOrder = useCallback((searchBy: string) => () => {
    const searchString = {...searchURLString, genre: searchBy};
    setSearchParams(searchString, { replace: true });
    dispatch(setMovieFilter({searchBy}));
  }, []);

  useEffect(() => {
    dispatch(setMovieFilter({searchBy: orderBy}));
  }, [dispatch]);

  return (<div className={styles.orderWrapper}>
    <div className={styles.orderTitle}>Sort by</div>
    <OrderSelect orderBy={orderBy} onChangeOrder={onChangeOrder}/>
  </div>);
}

  export default Orders;
