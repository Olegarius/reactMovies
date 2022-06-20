import React, { useCallback, useContext } from "react";
import * as Styled from './styles';
import { MovieContext } from "contextProviders";
import searchUrl from "images/search.svg";
import {getDuration} from "helpers/converters";
import { useSearchParams } from "react-router-dom";

const MovieDetails:React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieString = Object.fromEntries(searchParams)
  const [{selectedMovie: movie}, actions] = useContext(MovieContext);
  const onSearchHandler = useCallback(() => {
    setSearchParams({...movieString, movie: ""}, { replace: true });
    actions.SET_SELECTED_MOVIE(null);
  }, [movieString, setSearchParams, actions.SET_SELECTED_MOVIE]);

  return (
    <Styled.Wrapper>
      <Styled.LogoSearchWrapper>
        <Styled.Logo>netflixroulette</Styled.Logo>
        <Styled.Search onClick={onSearchHandler}><img src={searchUrl}/></Styled.Search>
      </Styled.LogoSearchWrapper>
      <Styled.ContentWrapper>
        <Styled.Image src={movie?.poster_path}/>
        <Styled.DescriptionWrapper>
          <Styled.TitleRatingWrapper>
            <Styled.Title>{movie?.title}</Styled.Title>
            <Styled.Rating>{movie?.vote_average}</Styled.Rating>
          </Styled.TitleRatingWrapper>
          <Styled.Genre>{movie?.genres.join(", ")}</Styled.Genre>
          <Styled.YearDurationWrapper>
            <Styled.Year>{movie?.release_date && (new Date(movie.release_date)).getFullYear()}</Styled.Year>
            <Styled.Duration>{getDuration(movie?.runtime || 0)}</Styled.Duration>
          </Styled.YearDurationWrapper>
          <Styled.Description>{movie?.overview}</Styled.Description>
        </Styled.DescriptionWrapper>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
}

  export default MovieDetails;
