import React from "react";

import Filters from './Filters/index';
import Movies from './Movies';
import * as Styled from './styles';

const Main:React.FC = () => (
  <Styled.Wrapper>
    <Filters/>
    <Movies/>
  </Styled.Wrapper>
);

export default Main;
