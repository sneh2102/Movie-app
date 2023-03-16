import React,{useState,useEffect} from 'react'
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';
import AddFavourites from './AddFavourites';
import RemoveFavourites from './RemoveFavourites';
import {Link } from 'react-router-dom';


export default function MainMovie() {
    const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('man');
	const [imdbId, setimdbId] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	const handleM = (ImdbId)=>{
		setimdbId(ImdbId);
	}


	useEffect(()=>{
		handleM(imdbId);
	})
	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

  return (
    <div>
      <div className='container-fluid movie-app'>
	  		
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
                <MovieListHeading  favourite='Favourite'/>
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
			</div>
			<Link to={`movie/${imdbId}`}>
            <div className="container">
			<div className='row'>
				<MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
					handleMovies={handleM}

                />
			</div>
            </div>
			</Link>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites'/>
			</div>
			<div className='row container'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
    </div>
  )
}
