import React, {useCallback} from "react";
import OrderSelect from './OrederSelect';
import { useSelector } from "react-redux";
import {useAppDispatch} from "../../../store";
import {selectMovieFilters} from "../../../store/slices/movies/selectors";
import { setMovieFilter } from "../../../store/slices/movies";
import { SORT_VALUES } from "../../../const";
import styles from './index.module.css';

const Orders:React.FC = () => {
  const dispatch = useAppDispatch();
  const movieFilters = useSelector(selectMovieFilters);
  const orderBy = movieFilters?.searchBy || SORT_VALUES.TITLE;
  const onChangeOrder = useCallback((searchBy: SORT_VALUES) => () => dispatch(setMovieFilter({searchBy})), []);

  return (<div className={styles.orderWrapper}>
    <div className={styles.orderTitle}>Sort by</div>
    <OrderSelect orderBy={orderBy} onChangeOrder={onChangeOrder}/>
  </div>);
}

  export default Orders;
