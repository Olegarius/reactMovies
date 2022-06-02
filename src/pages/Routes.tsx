import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Navigate, Routes as CoreRoutes} from 'react-router-dom';

const Loading:React.FC = () => <div>Loading...</div>;

export const Routes: React.FC = () => {
  const SearchComponent = lazy(() => import("./Search"));
  const NotFoundComponent = lazy(() => import("./NotFound"));

  return (
    <BrowserRouter>
      <CoreRoutes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading/>}>
                <Navigate to="/search" replace />
              </Suspense>
            }
          />
          <Route
            path="/search/*"
            element={
              <Suspense fallback={<Loading/>}>
                <SearchComponent />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading/>}>
                <NotFoundComponent />
              </Suspense>
            }
          />
      </CoreRoutes>
    </BrowserRouter>
  );
};
