import '../styles/layout/MovieSceneList.scss';
import MovieSceneItem from './MovieSceneItem';
import { Link } from 'react-router-dom';

const MovieSceneList = ({ movies, movieFilter }) => {
  if (movies.length === 0) {
    return (
      <p className='empty__movies'>
        Oh wow, what a disappointment! There is no WowMovie that matches "
        {movieFilter}". Try again or ask Santa Claus for Christmas.
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
      <ul className='movies__list'>{renderMoviesList}</ul>
    </>
  );
};

export default MovieSceneList;
