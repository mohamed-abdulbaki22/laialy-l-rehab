import React from "react";
import { Link } from "react-router-dom";
const  School= () => {
    return (  
        <nav className="school">
          <h1>School supplies donation</h1>
          <div className="links">
            <Link to = '/'>Home</Link>
            <Link to="/logout">logout</Link> 
          </div>
        </nav>  
      );
}
 
export default School;