import React, {useCallback, useContext} from "react";
import {useAppDispatch} from "../../store";
import {removeMovie} from '../../store/slices/movies';
import { MovieContext } from "../../contextProviders";
import Button from "../../elements/Button/Button";
import closeImg from './close.svg';
import styles from './index.module.css';

type Props = {
  onClose: () => void;
};

const DeletePopup:React.FC<Props> = ({onClose}) => {
  const dispatch = useAppDispatch();
  const [{movie}] = useContext(MovieContext);

  const onConfirm = useCallback(() => {
    dispatch(removeMovie(movie?.id));
    onClose();
  }, [dispatch]);

return (<div className={styles.wrapper}>
    <div className={styles.close} onClick={onClose}><img src={closeImg}/></div>
    <div className={styles.title}>Delete MOVIE</div>
    <div className={styles.content}>
      <div className={styles.confirmDelete}>Are you sure you want to delete this movie?</div>
    </div>
    <div className={styles.buttonWrapper}>
      <Button data-testid="deleteBtn" onClick={onConfirm} className={styles.button}>confirm</Button>
    </div>
  </div>);
}

  export default DeletePopup;
