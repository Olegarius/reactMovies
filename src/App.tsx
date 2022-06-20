import React from 'react';

import { ErrorBoundaryFunc } from "./helpers/errorboundary";
import * as Styled from "./styles";
import {Routes} from './pages/Routes';
import contextProviders from './contextProviders';
import { IMovieProvider } from './contextProviders/Movie';

function App() {
  return (
    <ErrorBoundaryFunc>
      {contextProviders.reduce(
        (memo, Provider: React.FC<IMovieProvider>) => (
          <Provider>{memo}</Provider>
        ),
        <Styled.Wrapper>
          <Styled.Container>
            <Routes/>
          </Styled.Container>
        </Styled.Wrapper>
      )}
    </ErrorBoundaryFunc>
  );
}

export default App;
