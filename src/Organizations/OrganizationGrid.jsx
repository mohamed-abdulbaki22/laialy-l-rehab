import Card from "../Card";

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
              organization name: {card.author} <br/>
              governorate: {card.governorate} <br />
              area: {card.area} <br />
            </p>
          }
          id={card.id}
          path="OrganizationPage"
        />
      ))}
    </div>
  );
};

export default OrganizationGrid;