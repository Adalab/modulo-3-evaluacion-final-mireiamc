import { Link } from 'react-router-dom';
import '../styles/layout/MovieSceneDetail.scss';
const MovieSceneDetail = ({ movie }) => {
  if (movie === undefined) {
    return <p>Lo sentimos, esta película no existe</p>;
  }

  return (
    <>
      <article className='detail__container'>
        <img
          className='detail__img'
          src={movie.poster}
          alt={`${movie.poster} poster`}
        />
        <div className='text__container'>
          <h1 className='text__title'>{movie.name}</h1>
          <p>Line: {movie.full_line}</p>
          <p>Director: {movie.director}</p>
          <p>Year: {movie.year}</p>
          <Link className='link box' target='_blank' to={movie.audio}>
            Listen the original audio
          </Link>
        </div>
      </article>
    </>
  );
};

export default MovieSceneDetail;
