import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Contact from "../components/Contact";
import Location from "../components/Location";
import Header from "../components/Header";
import "./App.css";

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/location" element={<Location />} />
			</Routes>
		</>
	);
}

export default App;
