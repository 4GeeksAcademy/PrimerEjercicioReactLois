import React from "react";
//importado card de bootsrap
//mx-  y mb- las tarjetas deben tener un espacio uniforme entre ellas y adaptarse al tamaño de la pantalla.
//d-flex: para poner las cards de forma horizontal
// text-center para poner todo el contenido de la "caja" en el medio.
const Card = () => {
    return ( 
        <div className="CardContainer d-flex" style={{ width: "80%", margin: "0 auto", marginTop: "20px" }} >
            <div className="card mx-4 mb-3" >
                <img src="..." className="card-img-top" alt="..." style={{ width: "500px", height: "325px" }} />    
                <div className="card-body text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consactatur ad pisicna aint Saniente esse necessitatibus neque.</p>
                    <div className="Boton">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div> 
            <div className="card mx-4 mb-3" >
                <img src="..." className="card-img-top" alt="..." style={{ width: "500px", height: "325px" }} />    
                <div className="card-body text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consactatur ad pisicna aint Saniente esse necessitatibus neque.</p>
                    <div className="Boton">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div> 
            <div className="card mx-4 mb-3" >
                <img src="..." className="card-img-top" alt="..." style={{ width: "500px", height: "325px" }} />    
                <div className="card-body text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consactatur ad pisicna aint Saniente esse necessitatibus neque.</p>
                    <div className="Boton">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div> 
            <div className="card mx-4 mb-3" >
                <img src="..." className="card-img-top" alt="..." style={{ width: "500px", height: "325px" }} /> 
                <div className="card-body text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consactatur ad pisicna aint Saniente esse necessitatibus neque.</p>
                    <div className="Boton">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div> 
        </div>
    )    
}
export default Card; 


        
    
