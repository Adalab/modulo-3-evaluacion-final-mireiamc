import '../styles/layout/MovieSceneList.scss';
import MovieSceneItem from './MovieSceneItem';
import { Link } from 'react-router-dom';

const MovieSceneList = ({ movies, movieFilter }) => {
  if (movies.length === 0) {
    return (
      <p className='empty__movies'>
        Oh WoW, que decepción! No hay ninguna WowMovie que coincida con "
        {movieFilter}". Prueba de nuevo o pídesela a Santa Claus para Navidad.
      </p>
    );
  }

  const renderMoviesList = movies.map((movie, index) => {
    return (
      <Link key={index} to={'/movie/' + movie.id} className='card__titles'>
        <li className='movies__item'>
          <MovieSceneItem movie={movie} />
        </li>
      </Link>
    );
  });

  return (
    <>
      <ul className='movies'>{renderMoviesList}</ul>
    </>
  );
};

export default MovieSceneList;
