import React, { useCallback, Dispatch, SetStateAction } from "react";
import styles from './index.module.css';
import logo from '../../images/logo.png';

type Props = {
  onAddMovie: Dispatch<SetStateAction<boolean>>;
};
const Header:React.FC<Props> = ({onAddMovie}) => {
  const onSearch=useCallback(() => {}, []);
  const onAddMovieHandler = useCallback(() => {
    onAddMovie(true);
    setTimeout(() => onAddMovie(false)); // TODO: remove this huck when redux will be implemented
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img src={logo}/>
        <div className={styles.addMovie} onClick={onAddMovieHandler}>+ add movie</div>
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
