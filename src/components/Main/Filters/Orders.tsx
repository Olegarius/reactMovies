import React from "react";
import OrderSelect from './OrederSelect';
import styles from './index.module.css';

type Props = {
  orderBy: string;
  onChangeOrder: (newOrder: string) => () => void;
}
const Orders:React.FC<Props> = ({orderBy, onChangeOrder}) => {
  return (<div className={styles.orderWrapper}>
    <div className={styles.orderTitle}>Sort by</div>
    <OrderSelect orderBy={orderBy} onChangeOrder={onChangeOrder}/>
  </div>);
}

  export default Orders;
