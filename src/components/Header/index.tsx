import React, { useCallback } from "react";
import styles from './index.module.css';
import logo from '../../images/logo.png';

const Header = () => {
  const onSearch=useCallback(() => {}, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img src={logo}/>
        <div className={styles.addMovie}>+ add movie</div>
      </div>
      <div className={styles.title}>FIND YOUR MOViE</div>
      <div className={styles.searchWrapper}>
        <input className={styles.searchInput} placeholder="What do you want to watch?"/>
        <input className={styles.searchButton} type="button" name="search" value="search" onClick={onSearch}/>
      </div>
    </div>
  );
}

  export default Header;
