import React, { useCallback } from "react";
import styles from './index.module.css';

type Props = {
  items: {
    label: string;
    value: string;
  }[],
  activeFilter: string;
  onFilterChange: (filter: string) => void;
};

const FilterItems:React.FC<Props> = ({items, activeFilter, onFilterChange}) => {
  const setFilter = useCallback((filterValue: string) => () => onFilterChange(filterValue), []);
  return (<div className={styles.filterWrapper}>{items.map(item => {
    return (
      <div className={`${styles.filterItem} ${item.value === activeFilter ? styles.active : ''}`} key={item.value} onClick={setFilter(item.value)}>{item.label}</div>
    )

  })}</div>);
}

  export default FilterItems;
