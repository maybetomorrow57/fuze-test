import React from "react";
import { useState, useEffect } from 'react';
import '../styles/app.css';
import List from './List';
import Search from './Search';

function App() {
	const [data, setData] = useState({houses: [], isLoaded: false, error: null});
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch('https://603e38c548171b0017b2ecf7.mockapi.io/homes')
		.then(res => res.json())
		.then(
			result => setData(data => ({...data, houses: result, isLoaded: true})), 
			error => setData(data => ({...data, error: error, isLoaded: true}))
		);
	}, []);

	return (
	    <div className="app">
	    	<h1>Our Latest Developments</h1>
	    	<Search search = {search} setSearch = {setSearch} />
	    	<List data = {data} search = {search}/>
	    	<button>
	    		See more >
	    	</button>
	    </div>
	);
}

export default App;
