import React from "react";
import MenuCard from "../components/MenuCard";
import populardishes from "../components/populardishes";
import { Link } from "react-router-dom";

function viewCard(card) {
	return (
		<div>
			<MenuCard Key={card.id} name={card.name} image={card.image} />
		</div>
	);
}

export default function Home() {
	return (
		<section>
			<h2 style={{ textAlign: "center" }}>Popular Dishes <img className="drum" src="../drum.jpg" alt="food image" /></h2>

			<div className="menu-grid">{populardishes.map(viewCard)}</div>
			<div className="about">
				<div>
					<img className="abt-image" src="../sadza.jpg" alt="food image" />
				</div>
				<div className="abt-us">
					<h3>About Us</h3>
					<p >
                    We are a proudly local food spot bringing you fresh, home-style meals made with passion. From traditional African dishes to modern favorites, we serve quality food at affordable prices. Our goal is to create a warm, welcoming experience where every customer feels at home
					</p>
					<ul>
						<li>Fresh ingedients</li>
						<li>Traditional recipes</li>
						<li>warm food</li>
					</ul>
				</div>
			</div>
			<footer className="footer">
				<section className="find-us">
					<div>
						<h3>Find Us</h3>
						<p>Near Hotel Verde - Cape Town Airport</p>
						<p>Matroosfontein Cape Town</p>
						<p>At Uber parking</p>

						<nav>
							<Link className="view" to="/contact">
								Contact
							</Link>
						</nav>
					</div>
				</section>
			</footer>
		</section>
	);
}
