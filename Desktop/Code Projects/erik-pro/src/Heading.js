import React, { Link } from "react-router-dom";

function Heading() {



    return (
        <div className="header-div-body" >
            
            <Link to="/Menu" ><button className="burger-button" >=</button></Link>

        </div>
    )
}

export default Heading