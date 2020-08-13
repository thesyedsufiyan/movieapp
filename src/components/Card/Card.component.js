import React from 'react';
import '../Card/Card.component.css'

const DEFAULT_MOVIE_POSTER =
    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const Card = ({ movie }) => {

    const poster = movie.Poster === 'N/A' ? DEFAULT_MOVIE_POSTER : movie.Poster;

    return (
        <div className='card'>
            <div>
                <h5>{movie.Title}</h5>
                <img width='200'
                    className='card-style'
                    alt={`this movie titled: ${movie.Title}`}
                    src={poster}
                />
            </div>
            <p>{movie.Year}</p>
            <button className='button'>favotite</button>
        </div>
    );
};

export default Card;