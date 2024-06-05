import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./card";
import Footer from "./Footer";
// margin: "0 auto" auotmático para centrarlo
//d-flex: se utiliza para establecer un contenedor como un flexbox, lo que permite organizar los elementos secundarios en filas o columnas y controlar su alineación, distribución y orden.
//flex-wrap se utiliza en combinación con d-flex para permitir que los elementos secundarios se envuelvan en múltiples líneas si no caben en una sola línea.
//d-flex y flex-wrap (CardContainer),las tarjetas se distribuyan en filas y que se envuelvan a la siguiente fila si no caben en la pantalla, lo que hace que el diseño sea responsive y se adapte a diferentes tamaños de pantalla.
//Podría poner +- mt-4 o style={{ marginTop: "20px" }} para darle margentop al contenedor de Card

const Home = () => {
    return (
        <div className="LandingPagePadre">
            <Navbar />
            <div className="Container">
                <div className="JumbotronContainer"style={{ width: "80%", margin: "0 auto" }}>
                    <Jumbotron />
                </div>
                <div className="CardContainer d-flex flex-wrap justify-content-center" style={{ marginTop: "20px" }}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
			<Footer /> 
        </div>
    );
};

export default Home;
