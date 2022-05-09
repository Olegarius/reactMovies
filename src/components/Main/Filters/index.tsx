import React, { useEffect, useState } from "react";
import styles from './index.module.css';
import FilterItems from './FilterItems';
import Orders from './Orders';
import { getFilterItems } from "../../../api";

type Props = {
  onFilterChange: (newFilter: string) => void;
  activeFilter: string;
  onOrderChange: (newOrder: string) => () => void;
  activeOrder: string;
}
const Filters:React.FC<Props> = ({onFilterChange, activeFilter, onOrderChange, activeOrder}) => {
  const [filterItems, setFilterItems] = useState(null);

  useEffect(() => {
    (async() => setFilterItems(await getFilterItems()))();
  }, [setFilterItems]);

return (<div className={styles.wrapper}>
    <FilterItems items={filterItems || []} activeFilter={activeFilter} onFilterChange={onFilterChange}/>
    <Orders orderBy={activeOrder} onChangeOrder={onOrderChange}/>
  </div>);
}

  export default Filters;
