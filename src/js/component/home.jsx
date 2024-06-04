import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./card";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="LandingPagePadre">
            <Navbar />
            <div className="Container">
                <div className="JumbotronContainer">
                    <Jumbotron />
                </div>
                <div className="CardContainer">
                    <Card />
                </div>
            </div>
			<Footer /> 
        </div>
    );
};

export default Home;
