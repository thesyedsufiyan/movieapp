import React, { useState, useEffect } from 'react';
import './App.css';
import Search from '../src/components/Search/Search.component';
import Card from '../src/components/Card/Card.component';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const MOVIE_URL = "http://www.omdbapi.com/?s=fast&apikey=3ec28278";

  useEffect(() => {
    fetch(MOVIE_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search)
        setLoading(false)
        console.log(jsonResponse);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(false);
    seterrorMessage(null);

    fetch(`http://www.omdbapi.com/?s=${searchValue},&apikey=3ec28278`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === 'true') {
          setMovies(jsonResponse.Search);
          setLoading(false)
          console.log(Response);
        } else {
          seterrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <div>
      <div className="navbar">
        <div className='navbar-title'> Home</div>
      </div>
      <Search search={search} />

      <div className='movies'>
        {loading && !errorMessage ? (
          <span>Loading...</span>
        ) : errorMessage ? (
          <div className='errorMessage'>{errorMessage}</div>
        ) : (
              movies.map((movie, index) => (
                <Card key={`${index}-${movie.title}`} movie={movie} />
              ))
            )}
      </div>
    </div>
  );
};

export default App;