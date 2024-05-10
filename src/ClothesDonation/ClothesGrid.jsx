import Card from "../Card";

const ClothesGrid = ({ crads }) => {
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
              age: {card.age} <br />
              gender: {card.gender} <br />
              season: {card.season}
            </p>
          }
          id={card.id}
          path="ClothesDonationPage"
        />
      ))}
    </div>
  );
};

export default ClothesGrid;