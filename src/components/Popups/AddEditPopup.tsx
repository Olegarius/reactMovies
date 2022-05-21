import React, {useCallback, useEffect, useState, useContext} from "react";

import closeImg from './close.svg';
import Button from '../../elements/Button';
import {TMovie} from '../../api/types';
import styles from './index.module.css';
import DatePicker from "../../elements/DatePicker";
import Input from "../../elements/Input";
import Select, {OptionType} from "../../elements/Select";
import { getFilterItems } from "../../api";
import { MovieContext } from "../../contextProviders";
import { TFilter } from "../../store/slices/filters";
import { getDuration, setDuration } from "../../helpers/converters";

type Props = {
  onClose: () => void;
  onConfirm: (data: TMovie) => any;
};

const AddEditPopup:React.FC<Props> = ({onClose, onConfirm}) => {
  const [{movie}] = useContext(MovieContext);
  const [filterItems, setFilterItems] = useState<OptionType[] | null>(null);
  const [currentGenres, setCurrentGenres] = useState<OptionType[] | null>(null);
  const [releaseDate, setReleaseDate] = useState<string | null>(null);

  useEffect(() => {
    (async() => {
      const genres = await getFilterItems();
      setFilterItems(genres);
      setCurrentGenres(genres.filter((genre: TFilter) => (movie?.genres ?? []).includes(genre.value)));
    })();
  }, [setFilterItems, setCurrentGenres]);

  const handleFormSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      const formData: any = {};
      const formFields = [
        "title",
        "genres",
        "release_date",
        "runtime",
        "poster_path",
        "vote_average",
        "overview"
      ];
      formFields.forEach((fieldName) => {
        if (
          event.currentTarget[fieldName]?.name === fieldName
        ) {
          formData[fieldName] = String(
            event.currentTarget[fieldName]?.value || ''
          ).trim();
        }
      });
      formData.vote_average = Number(formData.vote_average);
      formData.genres = currentGenres?.map(genre => genre.value);
      formData.release_date = releaseDate;
      formData.runtime = setDuration(formData.runtime);

      onConfirm({...movie, ...formData});
    },
    [movie, currentGenres, releaseDate]
  );
  
  const onResetHandler = useCallback(() => {
    const data = {}; //TODO: set initial data to form
  }, []);

  const onChangeInput = useCallback((data: any) => {
    //TODO: with formic
  }, []);

  const onChangeDate = useCallback((data: any) => {
    setReleaseDate(data);
  }, [setReleaseDate]);

  const onChangeSelect = useCallback((selected: OptionType[] | null) => {
    setCurrentGenres(selected);
  }, [setCurrentGenres]);


  return (<form className={styles.wrapper} onSubmit={handleFormSubmit}>
    <div className={styles.close} onClick={onClose}><img src={closeImg}/></div>
    <div className={styles.title}>Edit MOVIE</div>
    <div className={`${styles.content} ${styles.editContent}`}>
      <div className={styles.titleDateWrapper}>
        <Input name="title" title="title" wrapperClassName={styles.inputWrapper} onChange={onChangeInput} value={movie?.title ?? ''}/>
        <DatePicker title="release date" className={styles.inputDate} onChange={onChangeDate} value={new Date(movie?.release_date ?? new Date())}/>
      </div>
      <div className={styles.titleDateWrapper}>
        <Input name="poster_path" title="movie url" wrapperClassName={styles.inputWrapper} onChange={onChangeInput} value={movie?.poster_path ?? ''}/>
        <Input name="vote_average" title="rating" className={styles.inputDate} width="300px" onChange={onChangeInput} value={movie?.vote_average ?? ''}/>
      </div>
      <div className={styles.titleDateWrapper}>
        <Select title="genre" wrapperClassName={styles.inputWrapper} options={filterItems} onChange={onChangeSelect} value={currentGenres}/>
        <Input name="runtime" title="runtime" className={styles.inputDate} width="300px" onChange={onChangeInput} value={getDuration(movie?.runtime)}/>
      </div>
    </div>
    <Input name="overview" title="overview" type="textarea" className={styles.textarea} height="197px" width="100%" onChange={onChangeInput} value={movie?.overview}/>
    <div className={styles.buttonWrapper}>
      <Button type="reset" onClick={onResetHandler} className={styles.button}>reset</Button>
      <Button type="submit" className={styles.button}>submit</Button>
    </div>
  </form>);
}

  export default AddEditPopup;
