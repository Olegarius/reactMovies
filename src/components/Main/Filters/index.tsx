import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from './index.module.css';
import FilterItems from './FilterItems';
import Orders from './Orders';
import { useAppDispatch } from "../../../store";
import { getFilterItems } from "../../../store/slices/filters";
import { selectFilters } from "../../../store/slices/filters/selectors";

const Filters:React.FC = () => {
  const dispatch = useAppDispatch();
  const filterItems = useSelector(selectFilters);

  useEffect(() => {
    dispatch(getFilterItems());
  }, [dispatch]);

return (<div className={styles.wrapper}>
    <FilterItems items={(filterItems || []).slice(0,9)}/>
    <Orders/>
  </div>);
}

export default Filters;
