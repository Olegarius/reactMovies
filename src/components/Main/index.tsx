import React, { useCallback, useState } from "react";

import Filters from './Filters/index';
import Movies from './Movies';
import styles from './index.module.css';
import { SORT_LIST } from "../../const";

const Main:React.FC = () => (
  <div className={styles.wrapper}>
    <Filters/>
    <Movies/>
  </div>
);

export default Main;
