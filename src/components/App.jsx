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

  useEffect(() => {
    if (movies.length === 0) {
      getDataFromAPI().then((cleanData) => {
        setMovies(cleanData);
        ls.set('movies', cleanData);
      });
    }
  }, []);

  return (
    <div className='page__container'>
      <header className='header'>
        <h1 className='page__title'>Owen Wilson's "WoW"</h1>
      </header>
      <main className='movies__container'>
        <Filters />
        <MovieSceneList movies={movies} />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
