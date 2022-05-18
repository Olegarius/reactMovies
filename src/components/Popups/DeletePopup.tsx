import React, {useCallback, useEffect, useState} from "react";
import {deleteMovie} from '../../api';
import Button from "../../elements/Button";
import closeImg from './close.svg';
import styles from './index.module.css';

type Props = {
  id: number | string;
  onClose: () => void;
};

const DeletePopup:React.FC<Props> = ({id, onClose}) => {
  const onConfirm = useCallback(() => deleteMovie(id), []);
  return (<div className={styles.wrapper}>
    <div className={styles.close} onClick={onClose}><img src={closeImg}/></div>
    <div className={styles.title}>Delete MOVIE</div>
    <div className={styles.content}>
      <div className={styles.confirmDelete}>Are you sure you want to delete this movie?</div>
    </div>
    <div className={styles.buttonWrapper}>
      <Button onClick={onConfirm} className={styles.button}>confirm</Button>
    </div>
  </div>);
}

  export default DeletePopup;
