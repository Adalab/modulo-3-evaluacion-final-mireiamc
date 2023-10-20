import '../styles/layout/MovieSceneItem.scss';

const MovieSceneItem = ({movie}) => {
    return (
        <>
            <img 
            src={movie.poster} 
            alt={movie.name} 
            title={movie.name} 
            className="movie__img"/>
                <h3 className="movie__title">{`${movie.name} - ${movie.year}`}</h3>
            <p className="movie__line">{movie.full_line}</p>
        </>
    )
};

export default MovieSceneItem;
