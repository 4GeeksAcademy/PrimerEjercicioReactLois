import React from "react";
//
const Jumbotron = () => {
    return (
    
            <div className="mt-4 p-5 text-white rounded" style={{ backgroundColor: 'silver', width: "80%", margin: "0 auto" }}>
                <h1 style={{ color: 'black' }}>A Warm Welcome!</h1>
                <p style={{ color: 'black' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
                <button type="button" className="btn btn-primary">Call to action!</button>
            </div>
    )
}
export default Jumbotron;