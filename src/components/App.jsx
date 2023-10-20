import React from 'react';
import '../styles/App.scss';
import MovieSceneList from './MovieSceneList';
// import Filters from './Filters';
// import MovieSceneItem from './MovieSceneItem';
// import MovieSceneDetail from './MovieSceneDetail';
import getDataFromAPI from '../services/api';
// import ls from '../services/localStorage';

// Fichero src/components/App.jsx
import {useState, useEffect} from 'react';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      setMovies(cleanData);
    });
  }, []);

  return (
    <main className='movies__container'>
      <MovieSceneList movies={movies}/>
    </main>
  );
};

export default App;