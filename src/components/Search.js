import React from "react";
import '../styles/Search.css';


function Search(props) {

	const handleChange = e => {
		props.setSearch(e.target.value);
	};

	return (
		<div className="Search"> 
			<label htmlFor = "search">Filter</label> 
			<input id = "search" type = "text" value = {props.search} onChange = {handleChange}/>
		</div>
	);
}

export default Search;