// Fichero src/components/App.jsx
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';

import '../styles/App.scss';

import getDataFromAPI from '../services/api';
import ls from '../services/localStorage';

import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
// import MovieSceneItem from './MovieSceneItem';
import MovieSceneDetail from './MovieSceneDetail';

const App = () => {
  const [movies, setMovies] = useState(ls.get('movies', []));
  const [movieFilter, setMovieFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');

  useEffect(() => {
    if (movies.length === 0) {
      getDataFromAPI().then((cleanData) => {
        setMovies(cleanData);
        ls.set('movies', cleanData);
      });
    }
  }, []);

  const handleChange = (value) => {
    setMovieFilter(value);
  };

  const handleChangeYear = (value) => {
    setYearFilter(value);
  };

  const filteredMovies = movies
    .filter((movie) =>
      movie.name.toLowerCase().includes(movieFilter.toLowerCase())
    )
    .filter((item) => {
      if (yearFilter === '') {
        return true;
      } else {
        return parseInt(yearFilter) === item.year;
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const getYears = () => {
    const years = movies.map((movie) => movie.year);
    const uniquesYears = new Set(years);
    const uniquesArray = [...uniquesYears];
    const sortedArray = uniquesArray.sort((a, b) => a - b);
    return sortedArray;
  };

  const { pathname } = useLocation();
  const routeData = matchPath('/movie/:id', pathname);
  const movieId = routeData !== null ? routeData.params.id : '';
  const movieData = movies.find((movie) => movie.id === movieId);

  return (
    <div className='page__container'>
      <header className='header'>
        <h1 className='page__title'>Owen Wilson's "WoW"</h1>
      </header>

      <Routes>
        <Route
          path='/'
          element={
            <main className='movies__container'>
              <Filters
                movieFilter={movieFilter}
                handleChange={handleChange}
                yearFilter={yearFilter}
                handleChangeYear={handleChangeYear}
                years={getYears()}
              />
              <MovieSceneList
                movies={filteredMovies}
                movieFilter={movieFilter}
              />
            </main>
          }
        />
        <Route
          path='/movie/:id'
          element={
            <main className='movies-detail__container'>
              <MovieSceneDetail movie={movieData} />
              <Link className='link box' to='/'>
                Volver
              </Link>
            </main>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
