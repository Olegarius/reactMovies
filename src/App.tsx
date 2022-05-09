import React from 'react';

import { ErrorBoundaryFunc } from "./helpers/errorboundary";
import styles from './App.module.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <ErrorBoundaryFunc>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </div>
    </ErrorBoundaryFunc>
  );
}

export default App;
