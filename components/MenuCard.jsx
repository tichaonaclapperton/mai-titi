import React from "react";

export default function MenuCard(props) {
	return (
		<div className="menu-card">
			<p>{props.id}</p>
			<img src={props.image} alt={name} />
			<h3>{props.name}</h3>
			<p className="menu-price">{props.price}</p>
			<p>{props.category}</p>
		</div>
	);
}
