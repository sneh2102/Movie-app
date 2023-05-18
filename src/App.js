
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
	if(searchTerm===""){
	
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=1cfcd011743e20a4ccd560246fcb6e3f`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
	  console.log(movies);
  }
  else{	
    fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=1cfcd011743e20a4ccd560246fcb6e3f&language=en-US&query=${searchTerm}&page=1&include_adult=false`
	  )
		.then((response) => response.json())
		.then((data) => setMovies(data.results))
		.catch((error) => console.log(error));
		console.log(movies);
  }}, [searchTerm]);

  const handleClick = (movie) => {
    setSelectedMovie(movie);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="App">
      <header className="dark-mode">
        <h1 className="dark-mode">Movies App</h1>
        <input  type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearch} />
      </header>
      {selectedMovie && (
        <div className="details">
          <img
            src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
          />
          <h2>{selectedMovie.title}</h2>
          <p>{selectedMovie.overview}</p>
          <div className="close-button" onClick={() => setSelectedMovie(null)}></div>
        </div>
      )}
      <main>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-container">
			<div className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              onClick={() => handleClick(movie)}
            />
            <h2>{movie.title}</h2>
			<div className="rating">Rating: {movie.vote_average}</div>
			</div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
