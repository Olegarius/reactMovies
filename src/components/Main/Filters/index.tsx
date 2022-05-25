import React, { useEffect, useState } from "react";
import styles from './index.module.css';
import FilterItems from './FilterItems';
import Orders from './Orders';
import { getFilterItems } from "../../../api";

const Filters:React.FC = () => {
  const [filterItems, setFilterItems] = useState(null);

  useEffect(() => {
    (async() => setFilterItems(await getFilterItems()))();
  }, [setFilterItems]);

return (<div className={styles.wrapper}>
    <FilterItems items={(filterItems || []).slice(0,9)}/>
    <Orders/>
  </div>);
}

  export default Filters;
