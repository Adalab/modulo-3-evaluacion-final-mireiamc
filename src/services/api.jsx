import uuid from 'react-uuid';

const getDataFromAPI = () => {
    return fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
    .then((response) => response.json())
    .then((data) => {
        const cleanData = data.map((data) =>{
            return {
              poster: data.poster,
              name: data.movie,
              full_line: data.full_line,
              year: data.year,
              id: uuid(),
              director: data.director,
              audio: data.audio,
            };
        });
        return cleanData;
    });
};

export default getDataFromAPI;