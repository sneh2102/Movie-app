import React from 'react';
import {Link} from 'react-router-dom' 

const MovieListHeading = (props) => {
	return (
		<div className='col '>
			<h1>{props.heading}</h1>
			<Link to="">{props.favourite}</Link>
		</div>
	);
};

export default MovieListHeading;
