import React from "react";
//Importado de boostrap 
//navbar-expand-lg: Esta clase asegura que la barra de navegación se expanda horizontalmente a partir de pantallas grandes (lg). Para pantallas más pequeñas, se colapsará en un menú tipo hamburguesa.
//navbar-toggler: Este botón aparece en pantallas pequeñas y permite expandir o colapsar el contenido de la barra de navegación.
//navbar-toggler-icon: Este es el ícono del menú hamburguesa que aparece cuando la barra de navegación se colapsa.
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'black' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: 'white' }}>Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Home</a>
            <a className="nav-link" href="#" style={{ color: 'gray' }}>About</a>
            <a className="nav-link" href="#" style={{ color: 'gray' }}>Services</a>
            <a className="nav-link" href="#" style={{ color: 'gray' }}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

