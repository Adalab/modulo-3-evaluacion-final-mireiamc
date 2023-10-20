import '../styles/layout/MovieSceneList.scss';
import MovieSceneItem from './MovieSceneItem';

const MovieSceneList = ({ movies }) => {
  const renderMoviesList = movies.map((movie) => {
    return (
      <li className="movies__item" key={movie.id}>
        <MovieSceneItem movie={movie}/>
      </li>
    );
  });

  return (
    <>
      <ul className="movies">{renderMoviesList}</ul>
    </>
  );
};

export default MovieSceneList;
