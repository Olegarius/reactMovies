import React, { useCallback } from "react";

import { useSelector } from "react-redux";
import {useAppDispatch} from "../../../store";
import {selectMovieFilters} from "../../../store/slices/movies/selectors";
import { setMovieFilter } from "../../../store/slices/movies";

import styles from './index.module.css';

type Props = {
  items: {
    label: string;
    value: string;
  }[]
};

const FilterItems:React.FC<Props> = ({items}) => {
  const dispatch = useAppDispatch();
  const movieFilters = useSelector(selectMovieFilters);
  const activeFilter = movieFilters?.filter?.[0] || "";
  const setFilter = useCallback((filterValue: string) => () => dispatch(setMovieFilter({filter: [filterValue]})), []);

  return (<div className={styles.filterWrapper}>{items.map(item => (
      <div className={`${styles.filterItem} ${item.value === activeFilter ? styles.active : ''}`} key={item.value} onClick={setFilter(item.value)}>{item.label}</div>
    ))}
  </div>);
};

export default FilterItems;
