import React from 'react';
import { Link } from 'react-router-dom';

const Clothes = () => {
    return (  
      <nav className="clothes">
        <h1>The clothes donation</h1>
        <div className="links">
            <Link to = '/'>Home</Link>
            <Link to="/logout">logout</Link> 
        </div>
      </nav>  
    );
}
 
export default Clothes;