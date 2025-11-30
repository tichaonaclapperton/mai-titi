import React from "react";
import './header.css'
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<h1>Mai Titi's Kitchen  </h1>

			<div className="hero-content">
				<h2 className="header-subtitle">Authentic African Flavours</h2>
				<p className="header-subtitle">Home-style African meals in Cape Town</p>
			</div>

			<nav>
				<Link className="view" to="/">
					Home
				</Link>
				<Link className="view" to="/menu">
					View Menu
				</Link>
			</nav>
		</header>
	);
}
