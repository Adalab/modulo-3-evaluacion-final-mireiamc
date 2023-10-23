import '../styles/layout/MovieSceneList.scss';


import MovieSceneItem from './MovieSceneItem';

const MovieSceneList = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <p className='empty__movies'>
        Oh WoW, que decepción! No hay ninguna WowMovie que coincida con tu
        búsqueda, prueba de nuevo o pídesela a Santa Claus para Navidad
      </p>
    );
  }

  const renderMoviesList = movies.map((movie, index) => {
    return (
      <li className='movies__item' key={movie.id}>
        <MovieSceneItem movie={movie} />
      </li>
    );
  });

  return (
    <>
      <ul className='movies'>{renderMoviesList}</ul>
    </>
  );
};

export default MovieSceneList;
