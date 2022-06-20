import React, {useCallback, useEffect, useState, useContext} from "react";

import closeImg from 'images/close.svg';
import {TMovie} from 'api/types';
import * as Styled from './styles';
import {OptionType} from "elements/Select/Select";
import DatePicker from "elements/DatePicker";
import Input from "elements/Input";
import Select from "elements/Select";
import Button from 'elements/Button';
import { getFilterItems } from "api";
import { MovieContext } from "contextProviders";
import { TFilter } from "store/slices/filters";
import { getDuration, setDuration } from "helpers/converters";

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

  return (<Styled.Form config={config} onSubmit={handleFormSubmit}>
      <>
      <Styled.Close onClick={onClose}><img src={closeImg}/></Styled.Close>
      <Styled.Title>Edit MOVIE</Styled.Title>
      <Styled.Content type="edit">
        <Styled.TitleDateWrapper>
          <Input name="title" title="title" wrapperClassName={Styled.InputWrapper} value={movie?.title ?? ''} rules={formFields.title}/>
          <DatePicker name="release_date" title="release date" className={Styled.InputDate} value={new Date(movie?.release_date ?? new Date())} rules={formFields.release_date}/>
        </Styled.TitleDateWrapper>
        <Styled.TitleDateWrapper>
          <Input name="poster_path" title="movie url" wrapperClassName={Styled.InputWrapper} value={movie?.poster_path ?? ''} rules={formFields.poster_path}/>
          <Input name="vote_average" title="rating" className={Styled.InputDate} width="300px" value={movie?.vote_average ?? ''} rules={formFields.vote_average}/>
        </Styled.TitleDateWrapper>
        <Styled.TitleDateWrapper>
          <Select name="genres" title="genre" wrapperClassName={Styled.InputWrapper} options={filterItems} value={currentGenres}/>
          <Input name="runtime" title="runtime" className={Styled.InputDate} width="300px" value={getDuration(movie?.runtime)} rules={formFields.runtime}/>
        </Styled.TitleDateWrapper>
      </Styled.Content>
      <Input name="overview" title="overview" type="textarea" className={Styled.Textarea} height="197px" width="100%" value={movie?.overview} rules={formFields.overview}/>
      <Styled.ButtonWrapper>
        <Button type="reset" onClick={onResetHandler}>reset</Button>
        <Button type="submit">submit</Button>
      </Styled.ButtonWrapper>
      </>
    </Styled.Form>);
}

  export default AddEditPopup;
