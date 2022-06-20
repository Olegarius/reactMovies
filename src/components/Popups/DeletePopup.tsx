import React, {useCallback, useContext} from "react";
import {useAppDispatch} from "../../store";
import {removeMovie} from '../../store/slices/movies';
import { MovieContext } from "../../contextProviders";
import Button from "../../elements/Button/Button";
import closeImg from 'images/close.svg';
import * as Styled from './styles';

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

return (<Styled.Wrapper>
    <Styled.Close onClick={onClose}><img src={closeImg}/></Styled.Close>
    <Styled.Title>Delete MOVIE</Styled.Title>
    <Styled.Content>
      <Styled.ConfirmDelete>Are you sure you want to delete this movie?</Styled.ConfirmDelete>
    </Styled.Content>
    <Styled.ButtonWrapper>
      <Button data-testid="deleteBtn" onClick={onConfirm} className={Styled.Button}>confirm</Button>
    </Styled.ButtonWrapper>
  </Styled.Wrapper>);
}

  export default DeletePopup;
