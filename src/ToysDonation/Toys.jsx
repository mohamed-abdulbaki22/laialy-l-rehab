import React from "react";
import { Link } from "react-router-dom";
const  Toys= () => {
    return (  
        <nav className="toys">
          <h1>The Toys donation</h1>
          <div className="links">
            <Link to = '/'>Home</Link>
            <Link to="/logout">logout</Link> 
          </div>
        </nav>  
      );
}
 
export default Toys;