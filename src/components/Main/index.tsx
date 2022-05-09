import React, { useCallback, useState } from "react";

import Filters from './Filters/index';
import Movies from './Movies';
import styles from './index.module.css';
import { SORT_LIST } from "./Filters/const";

const Main = () => {
  const [currentFilter, setCurrentFilter] = useState<string>('');
  const [currentOrder, setCurrentOrder] = useState<string>(SORT_LIST[0].value);
  const onFilterChange = useCallback((newFilter: string) => {setCurrentFilter(newFilter)}, [setCurrentFilter]);
  const onOrderChange = useCallback((newOrder: string) => () => {setCurrentOrder(newOrder)}, [setCurrentOrder]);

return (<div className={styles.wrapper}>
    <Filters
      onFilterChange={onFilterChange}
      activeFilter={currentFilter}
      onOrderChange={onOrderChange}
      activeOrder={currentOrder}/>
    <Movies filter={currentFilter} sort={currentOrder}/>
  </div>);
}

  export default Main;
