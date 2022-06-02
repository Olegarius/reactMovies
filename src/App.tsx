import React from 'react';

import { ErrorBoundaryFunc } from "./helpers/errorboundary";
import styles from './App.module.css';
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
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <Routes/>
          </div>
      </div>
      )}
    </ErrorBoundaryFunc>
  );
}

export default App;
