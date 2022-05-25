import React, {useCallback, useEffect, useState, useContext} from "react";
import Form from '../../elements/Form';
import closeImg from './close.svg';
import Button from '../../elements/Button';
import {TMovie} from '../../api/types';
import styles from './index.module.css';
import DatePicker from "../../elements/DatePicker";
import Input from "../../elements/Input";
import Select from "../../elements/Select";
import {OptionType} from "../../elements/Select/Select";
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

  const initialValues: any = {};
  const formFields = {
    title: {isRequired: true},
    genres: {isRequired: true},
    release_date: {},
    runtime: {},
    poster_path: {isRequired: true},
    vote_average: {
      valueAsNumber: true
    },
    overview: {isRequired: true}
  };
  Object.keys(formFields).forEach((field: string) => {
    if (field === "genres") {
      initialValues[field] = currentGenres || [];
    } else if (field === "runtime") {
      initialValues[field] = getDuration(movie?.[field] || "");
    } else {
      initialValues[field] = movie?.[field] || "";
    }
  });
  const config = {
    defaultValues: initialValues
  }

  useEffect(() => {
    (async() => {
      const genres = await getFilterItems();
      setCurrentGenres(genres.filter((genre: TFilter) => (movie?.genres ?? []).includes(genre.value)));
      setFilterItems(genres);
    })();
  }, [setFilterItems, setCurrentGenres]);

  const handleFormSubmit = useCallback((fields: Record<string, any> | undefined): void => {
      const formData = fields || {};

      formData.genres = currentGenres?.map(genre => genre.value);
      formData.runtime = setDuration(formData.runtime);

      onConfirm({...movie, ...formData});
    },
    [movie, formFields]
  );

  const onResetHandler = useCallback((formMethods: any) => {
    formMethods?.reset?.(config.defaultValues)
  }, [config.defaultValues]);

  return (<Form config={config} className={styles.wrapper} onSubmit={handleFormSubmit}>
      <>
      <div className={styles.close} onClick={onClose}><img src={closeImg}/></div>
      <div className={styles.title}>Edit MOVIE</div>
      <div className={`${styles.content} ${styles.editContent}`}>
        <div className={styles.titleDateWrapper}>
          <Input name="title" title="title" wrapperClassName={styles.inputWrapper} value={movie?.title ?? ''} rules={formFields.title}/>
          <DatePicker name="release_date" title="release date" className={styles.inputDate} value={new Date(movie?.release_date ?? new Date())} rules={formFields.release_date}/>
        </div>
        <div className={styles.titleDateWrapper}>
          <Input name="poster_path" title="movie url" wrapperClassName={styles.inputWrapper} value={movie?.poster_path ?? ''} rules={formFields.poster_path}/>
          <Input name="vote_average" title="rating" className={styles.inputDate} width="300px" value={movie?.vote_average ?? ''} rules={formFields.vote_average}/>
        </div>
        <div className={styles.titleDateWrapper}>
          <Select name="genres" title="genre" wrapperClassName={styles.inputWrapper} options={filterItems} value={currentGenres}/>
          <Input name="runtime" title="runtime" className={styles.inputDate} width="300px" value={getDuration(movie?.runtime)} rules={formFields.runtime}/>
        </div>
      </div>
      <Input name="overview" title="overview" type="textarea" className={styles.textarea} height="197px" width="100%" value={movie?.overview} rules={formFields.overview}/>
      <div className={styles.buttonWrapper}>
        <Button type="reset" onClick={onResetHandler} className={styles.button}>reset</Button>
        <Button type="submit" className={styles.button}>submit</Button>
      </div>
      </>
    </Form>);
}

  export default AddEditPopup;
