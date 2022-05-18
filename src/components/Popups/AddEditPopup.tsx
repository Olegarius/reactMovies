import React, {useCallback, useEffect, useState} from "react";

import closeImg from './close.svg';
import Button from '../../elements/Button';
import {IMovie} from '../Main/Movies/types';
import styles from './index.module.css';
import DatePicker from "../../elements/DatePicker";
import Input from "../../elements/Input";
import Select, {OptionType} from "../../elements/Select";
import { getFilterItems } from "../../api";

type Props = {
  movie?: IMovie;
  onClose: () => void;
  onConfirm: (data: IMovie | {}) => any;
};

const AddEditPopup:React.FC<Props> = ({movie, onClose, onConfirm}) => {
  const [filterItems, setFilterItems] = useState<OptionType[] | null>(null);
  const [currentGenres, setCurrentGenres] = useState<OptionType[] | null>(null);

  useEffect(() => {
    (async() => {
      const genres = await getFilterItems();
      const currentGenres = genres?.filter((genre: OptionType) => (movie?.genre || []).includes(genre.value));
      setCurrentGenres(currentGenres);
      setFilterItems(genres);
    })();
  }, [setFilterItems, setCurrentGenres]);

  const handleFormSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      const formData = {};
      debugger;
    },
    []
  );
  
  const onResetHandler = useCallback(() => {
    const data = {}; //set initial data to form
  }, []);
  const onConfirmHandler = useCallback(() => {
    const data = {}; //collect data from form
    onConfirm(data);
  }, []);

  const onChangeInput = useCallback((data: any) => {
    debugger;
    //TODO...
  }, []);

  const onChangeSelect = useCallback((selected: OptionType[] | null) => {
    setCurrentGenres(selected);
  }, [setCurrentGenres]);


  return (<form className={styles.wrapper} onSubmit={handleFormSubmit}>
    <div className={styles.close} onClick={onClose}><img src={closeImg}/></div>
    <div className={styles.title}>Edit MOVIE</div>
    <div className={`${styles.content} ${styles.editContent}`}>
      <div className={styles.titleDateWrapper}>
        <Input title="title" wrapperClassName={styles.inputWrapper} onChange={onChangeInput} value={movie?.title ?? ''}/>
        <DatePicker title="release date" className={styles.inputDate} onChange={onChangeInput} value={new Date(movie?.release_date ?? new Date())}/>
      </div>
      <div className={styles.titleDateWrapper}>
        <Input title="movie url" wrapperClassName={styles.inputWrapper} onChange={onChangeInput} value={movie?.movieURL ?? ''}/>
        <Input title="rating" className={styles.inputDate} width="300px" onChange={onChangeInput} value={movie?.rating ?? ''}/>
      </div>
      <div className={styles.titleDateWrapper}>
        <Select title="genre" wrapperClassName={styles.inputWrapper} options={filterItems} onChange={onChangeSelect} value={currentGenres}/>
        <Input title="runtime" className={styles.inputDate} width="300px" onChange={onChangeInput} value={movie?.runtime}/>
      </div>
    </div>
    <Input title="overview" type="textarea" className={styles.textarea} height="197px" width="100%" onChange={onChangeInput} value={movie?.description}/>
    <div className={styles.buttonWrapper}>
      <Button type="reset" onClick={onResetHandler} className={styles.button}>reset</Button>
      <Button type="submit" className={styles.button}>submit</Button>
    </div>
  </form>);
}

  export default AddEditPopup;
