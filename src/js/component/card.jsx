import React from "react";
//importado card de bootsrap
//mb-3 para asegurar que las tarjetas tengan un espaciado adecuado entre ellas en todas las resoluciones de pantallas
// text-center para poner todo el contenido de la "caja" en el medio.

const Card = () => {
    return ( 
        <div className="card mx-2 mb-3" style={{ width: "18rem" }} >
            <img src="https://img.freepik.com/foto-gratis/fondo-creativo-alto-angulo-formas-grises_23-2148811502.jpg" className="card-img-top" alt="..." />    
            <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consactatur ad pisicna aint Saniente esse necessitatibus neque.</p>
                <div className="Boton">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
       </div> 
    );   
}
export default Card; 


        
    
