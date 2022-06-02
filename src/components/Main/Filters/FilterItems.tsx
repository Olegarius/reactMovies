import React, { useCallback, useEffect } from "react";

import { useSelector } from "react-redux";
import {useAppDispatch} from "../../../store";
import {selectMovieFilters} from "../../../store/slices/movies/selectors";
import { setMovieFilter } from "../../../store/slices/movies";

import styles from './index.module.css';
import { useSearchParams } from "react-router-dom";

type Props = {
  items: {
    label: string;
    value: string;
  }[]
};

const FilterItems:React.FC<Props> = ({items}) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const searchURLString = Object.fromEntries(searchParams)
  const dispatch = useAppDispatch();
  const movieFilters = useSelector(selectMovieFilters);
  const activeFilter = searchParams.get("filter") || movieFilters?.filter?.[0] || "";
  const setFilter = useCallback((filterValue: string) => () => {
    const filterString = {...searchURLString, filter: filterValue};
    setSearchParams(filterString, { replace: true });
    dispatch(setMovieFilter({filter: [filterValue]}));
  }, []);

  useEffect(() => {
    dispatch(setMovieFilter({filter: [activeFilter]}));
  }, [activeFilter, dispatch]);

  return (<div className={styles.filterWrapper}>{items.map(item => (
      <div className={`${styles.filterItem} ${item.value === activeFilter ? styles.active : ''}`} key={item.value} onClick={setFilter(item.value)}>{item.label}</div>
    ))}
  </div>);
};

export default FilterItems;
