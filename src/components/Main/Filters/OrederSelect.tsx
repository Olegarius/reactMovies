import React, { useCallback, useState } from "react";
import downImg from '../../../images/down.svg';
import { SORT_LIST, SORT_VALUES } from "../../../const";
import styles from './index.module.css';

type Props = {
  orderBy: string;
  onChangeOrder: (newOrder: SORT_VALUES) => () => void;
}
const OrderSelect:React.FC<Props> = ({orderBy, onChangeOrder}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onToggleSelect = useCallback(() => setIsOpen(isOpen => !isOpen), [setIsOpen]);
  return (<div className={styles.orderSelectWrapper} onClick={onToggleSelect}>
    <div className={styles.selectedOrderWrapper}>
      {orderBy}
      <img src={downImg} className={styles.orderSelectDownImg} />
    </div>
    {isOpen && <div className={styles.orderList}>
      {SORT_LIST.map(item => (
        <div key={item.value} className={styles.orderListItem} onClick={onChangeOrder(item.value)}>{item.title}</div>
      ))}
    </div>}
  </div>);
}

  export default OrderSelect;
