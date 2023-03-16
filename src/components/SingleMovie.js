import { Link } from "react-router-dom";

const SingleMovie = (props) => {

  const { movie } = fetch(`https://www.omdbapi.com/?i=${props.imdbId}&apikey=4a3b711b`);

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating}</p>
          <p className="card-text">{movie.Country}</p>
          <Link to="/" className="back-btn">
            Go Back
          </Link>
        </div>
      </div>
    </section>
  );
};
export default SingleMovie;