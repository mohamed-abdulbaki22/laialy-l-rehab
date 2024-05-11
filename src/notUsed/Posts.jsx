const handleClick = () => {
    // Logic for handling click event
    
    console.log("Button clicked");
  };





  import { Link } from "react-router-dom";
  // import useFetch from './useFetch';


 
    



import React from 'react';

  const Posts = ({ blogs, title, handleDelete }) => {
    return (
      <div>

      
              <button className="fillter" onClick={handleClick}>
                  <strong>filter</strong></button>
          
      <div>
        <div className='detailsBoxs'>
          {blogs.map((item) => (
            <div className="detailsBox" key={item.id}>

              <p>{item.type}</p>
              <button onClick={() => handleButtonClick(item.id)}>{item.buttonLabel}more Info</button>
            </div>
          ))}
        </div>
      </div>
      </div>
    );

}

export default Posts;

              {/* {window.location.href === 'http://localhost:4000/ClothesPosts' && (
                <div>
                  console.console.log("in clothes post");
                  <p>Type: {item.type}</p>
                  <p>Gender: {item.gender}</p>
                  <p>Age: {item.age}</p>
                  <p>Season: {item.season}</p>
                  <p>Material: {item.material}</p>
                  <p>Quantity Requested: {item["quantity requested"]}</p>
                </div>
            )}

            {window.location.href === 'http://localhost:4000/ToysPosts' && (
              <div>
                <p>Type: {item.type}</p>
                <p>Gender: {item.gender}</p>
                <p>Age: {item.age}</p>
                <p>Category: {item.category}</p>
                <p>Toy Picture: {item["Toy"]}</p>
                <p>Quantity Requested: {item["quantity requested"]}</p>
              </div>
            )} */}
