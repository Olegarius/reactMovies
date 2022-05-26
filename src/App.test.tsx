import React from 'react';
import { render, screen } from '@testing-library/react';

jest.mock('./contextProviders', () => ({
  __esModule: true,
  default: [({children}: {children: JSX.Element | string}) => <>{children}</>],
}));
jest.mock('./helpers/errorboundary', () => ({
  ErrorBoundaryFunc: ({children}: {children: JSX.Element | string}) => <>{children}</>,
}));

jest.mock('./components/Header', () => ({
  __esModule: true,
  default: () => <div>Header</div>,
}));
jest.mock('./components/Main', () => ({
  __esModule: true,
  default: () => <div>Main</div>,
}));
jest.mock('./components/Footer', () => ({
  __esModule: true,
  default: () => <div>Footer</div>,
}));

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const mainText = screen.getByText(/Main/i);
  //screen.debug();
  expect(mainText).toBeInTheDocument();
});
