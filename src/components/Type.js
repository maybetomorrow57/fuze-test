import React from "react";
import '../styles/type.css';

function Type(props) {
	let labelColor = (props.type === "IndependentLiving") ? "blue-label" : "orange-label";

	return (
		<label className = {labelColor}>{props.type}</label>
	);
}

export default Type;