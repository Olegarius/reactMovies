import React from 'react';

import {MovieContext, MovieProvider} from './Movie';

const contextProviders: React.FC[] = [
  MovieProvider,
];

export {MovieContext};

export default contextProviders;
