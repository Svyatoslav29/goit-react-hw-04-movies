import './App.css';
import AppBar from './Components/AppBar';
import {Load} from './Components/Loader/Loader.js';
import {React, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const HomePage = lazy(() =>
  import(
    "./Pages/HomePage/HomePage.js" /* webpackChunkName: "home-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    "./Pages/MovieDetailsPage/MovieDatailsPage.js" /* webpackChunkName: "movie-details-page" */),
);

const MoviesPage = lazy(() =>
  import(
    "./Pages/MoviesPage/MoviesPage.js" /* webpackChunkName: "movies-page" */),
);

const NotFoundPage = lazy(() => 
  import(
    "./Pages/MoviesPage/MoviesPage.js" /* webpackChunkName: "not-found-page" */),
);


const App = () => {
  return (
    <>
    <AppBar />

    <Suspense fallback={<Load />}>

     <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route >
            <NotFoundPage  />
          </Route>
      </Switch>
    </Suspense>
    </>
  )
}

export default App;