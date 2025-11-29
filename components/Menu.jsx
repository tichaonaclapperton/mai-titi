import React from "react";
import menuItems from "./menuitems";
import MenuCard from "./MenuCard";

function createCard(card) {
	return (
		<div>
			<MenuCard
				Key={card.id}
				name={card.name}
				price={card.price}
				image={card.image}
				category={card.category}
			/>
		</div>
	);
}

export default function Menu() {
	return (
		<section>
			<h2 style={{ textAlign: "center" }}>Menu</h2>

			<div className="menu-grid">{menuItems.map(createCard)}</div>
		</section>
	);
}
