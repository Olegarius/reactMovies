import React, { useCallback, useContext, useEffect, useState, useTransition } from "react";
import * as Styled from './styles';
import logo from 'images/logo.png';
import { MovieContext } from "contextProviders";
import { useSelector } from "react-redux";
import {useAppDispatch} from "store";
import {selectMovieFilters} from "store/slices/movies/selectors";
import { setMovieFilter } from "store/slices/movies";
import { useParams, useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import { generatePath } from "react-router";

const Search:React.FC = () => {
  const { '*': searchQuery} = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchURLString = Object.fromEntries(searchParams);
  const dispatch = useAppDispatch();
  const movieFilters = useSelector(selectMovieFilters);
  const search = movieFilters?.search || searchQuery;
  const [isPending, startTransistion] = useTransition();

  const [searchValue, setSearchValue] = useState(search);
  const [filterValue, setFilterValue] = useState(search);
  const [, actions] = useContext(MovieContext);

  useEffect(() => {
    dispatch(setMovieFilter({search: filterValue}));
  }, [filterValue]);

  const onSearch = () => dispatch(setMovieFilter({search: filterValue}));
  const onAddMovieHandler = useCallback(() => actions.SET_ADD_MOVIE(true), []);
  const onChangeSearch = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const searchValue = e?.currentTarget?.value || "";
    setSearchValue(searchValue);
    const pathname = generatePath("/search/*", {"*": searchValue});
    navigate({
      pathname,
      search: createSearchParams(searchURLString).toString()
    }, { replace: true });
    startTransistion(() => {
      setFilterValue(searchValue);
    });
  }, [searchURLString, navigate, dispatch, setSearchValue, setFilterValue, startTransistion]);

  return (
    <Styled.Wrapper>
      <Styled.LogoWrapper>
        <img src={logo}/>
        <Styled.AddMovie onClick={onAddMovieHandler}>+ add movie</Styled.AddMovie>
      </Styled.LogoWrapper>
      <Styled.Title>FIND YOUR MOViE</Styled.Title>
      <Styled.SearchWrapper>
        <Styled.SearchInput onChange={onChangeSearch} value={searchValue} placeholder="What do you want to watch?"/>
        <Styled.SearchButton type="button" name="search" value="search" onClick={onSearch}/>
      </Styled.SearchWrapper>
    </Styled.Wrapper>
  );
}

  export default Search;
