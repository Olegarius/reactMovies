import React, { useCallback, useState } from 'react';

import { ErrorBoundaryFunc } from "./helpers/errorboundary";
import styles from './App.module.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  // TODO: temporary solution while don't have redux. Props drilling present everywhere )
  const [addMovie, setAddMovie] = useState(false);

  return (
    <ErrorBoundaryFunc>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header onAddMovie={setAddMovie}/>
          <Main addMovie={addMovie}/>
          <Footer/>
        </div>
      </div>
    </ErrorBoundaryFunc>
  );
}

export default App;
