import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./card";

//create your first component

//Jumbotron y las cards ocuparán un ancho relativo al contenedor principal, lo que garantizará que tengan el mismo ancho y se adapten a diferentes tamaños de pantalla
const Home = () => {
	return (
		<div className="LandingPagePadre">
			<Navbar/>
			<div className="Container">
				<div className="JumbotronContainer"> 
					<Jumbotron/>
				</div>
				<div className="CardContainer" >
					<Card/>
				</div>
			</div>
			<footer/>								
		</div>
	);
};

export default Home;
