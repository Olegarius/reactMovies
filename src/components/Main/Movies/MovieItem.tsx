import React, {MouseEvent, useCallback, useState, useContext} from "react";

import ContextMenu from 'components/Popups/ContextMenu';
import {TMovie} from 'api/types';
import * as Styled from './stylesItem';
import { MovieContext } from "contextProviders";
import { useSearchParams } from "react-router-dom";

type Props = {
  movie: TMovie;
  onAction: (action: string, movie: TMovie) => void;
}
const MovieItem:React.FC<Props> = ({movie, onAction}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieString = Object.fromEntries(searchParams)
  const [, actions] = useContext(MovieContext);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const handleContextMenu = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      setShowContextMenu(true);
    },
    [setShowContextMenu]
  );

  const onOpenDetails = useCallback(() => {
    if (showContextMenu) {
      setShowContextMenu(false);
    }
    setSearchParams({...movieString, movie: String(movie?.id)}, { replace: true });
    actions.SET_SELECTED_MOVIE(movie);
  }, [showContextMenu, setSearchParams, setShowContextMenu, actions.SET_SELECTED_MOVIE]);

  const onActionClick = useCallback((action: string)=>(event: MouseEvent<HTMLDivElement>)=>{
    event.stopPropagation();
    setShowContextMenu(false);
    onAction(action, movie);
  }, [setShowContextMenu, onAction, movie]);

  return (<Styled.Wrapper onClick={onOpenDetails} onContextMenu={handleContextMenu}>
    <Styled.Image src={movie.poster_path}/>
    <Styled.TitleWrapper>
      <Styled.Title>{movie.title}</Styled.Title>
      <Styled.Year>{movie?.release_date && (new Date(movie.release_date)).getFullYear()}</Styled.Year>
    </Styled.TitleWrapper>
    <Styled.Genre>{movie?.genres?.length && movie.genres.join(', ')}</Styled.Genre>
    {showContextMenu && (<ContextMenu onClick={onActionClick}/>)}
  </Styled.Wrapper>);
}

  export default MovieItem;
