import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainMovie from './components/MainMovie';
import SingleMovie from './components/SingleMovie'

const App = () => {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainMovie/>}/>
				<Route path="movie/:id" element={<SingleMovie/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
