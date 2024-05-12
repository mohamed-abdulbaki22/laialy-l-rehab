import Card from "../Card";
import useFetch from "../useFetch";
import { useState } from "react";

const OrganizationGrid = ({ crads }) => {



  return (
    <div className="card-container">
      {crads.map((card) => (
        <Card
          title={card.type}
          img={card.img}

          description={
            <p>
              {/* This {card.gender} {card.type} is perfect for the {card.season}.
              Made from comfortable {card.material}, it's ideal for casual wear.
              Available in various sizes, this shirt is a must-have for your
              wardrobe. Order now! */}

              amount needed: {card["quantity requested"]} <br />

             
            </p>
          }
          id={card.id}
          path="OrgazizationHomePage"
          button= {<button>Delete</button>}
        />
        
      ))}
      
    </div>
  );
};

export default OrganizationGrid;