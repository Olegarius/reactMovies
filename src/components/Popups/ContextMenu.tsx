import React from "react";

import * as Styled from './styles';

type Props = {
  onClick: (actionType: string) => (event: any) => void;
};

const ContextMenu:React.FC<Props> = ({onClick: action}) => {

  return (<Styled.WrapperContext>
    <li onClick={action('edit')}>Edit</li>
    <li onClick={action('delete')}>Delete</li>
  </Styled.WrapperContext>);
}

  export default ContextMenu;
