import React from "react";
import '../styles/List.css';
import image from "../images/image.png";
import Type from './Type';


function List(props) {

	if(!props.data.isLoaded) {
		return (
			<div className = "loading">Loading...</div>
		);		
	}

	if (props.data.error) {
		return (
			<div className = "error">{props.data.error.message}</div>
		);	
	}

	let houses = props.data.houses.concat();
	if (props.search != "" && props.search.length > 3) {
		houses = houses.filter(house => house.title.toLowerCase().includes(props.search.toLowerCase()));
	}

	if (houses.length == 0) {
		return (
			<div className = "no-results">No results were found for your search...</div>
		);
	}


	return (
		<div className="List"> 
			{houses.map(house => (
				<div className = "card" key = {house.id}>
					<a href = {`/details/${house.id}`} target = "_blank">
						<div className = "card-img">
							<img src = {image} alt = "house" />
							<Type type = {house.type}/> 
						</div>
						<h3>{house.title}</h3>
						<p className = "address">{house.address}</p>
						<p className = "price">New Properties for Sale from <span>£{house.price}</span></p>
						<p className = "shared">Shared Ownership Available</p>
					</a>
				</div>
			))}
		</div>
	);
}

export default List;