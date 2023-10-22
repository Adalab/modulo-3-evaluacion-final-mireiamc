// Fichero src/components/App.jsx
import { useState, useEffect } from 'react';

import '../styles/App.scss';

import getDataFromAPI from '../services/api';
import ls from '../services/localStorage';

import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
// import MovieSceneItem from './MovieSceneItem';
// import MovieSceneDetail from './MovieSceneDetail';

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
      console.log(yearFilter);
      if (yearFilter === '') {
        return true;
      } else {
        return parseInt(yearFilter) === item.year;
      } //item.year.toString()??
    });
  // .sort((a, b) => a.name.localCompare(b.name));

  const years = movies.map((movie) => movie.year);

  return (
    <div className='page__container'>
      <header className='header'>
        <h1 className='page__title'>Owen Wilson's "WoW"</h1>
      </header>
      <main className='movies__container'>
        <Filters
          movieFilter={movieFilter}
          handleChange={handleChange}
          yearFilter={yearFilter}
          handleChangeYear={handleChangeYear}
          years={years}
        />
        <MovieSceneList movies={filteredMovies} />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
