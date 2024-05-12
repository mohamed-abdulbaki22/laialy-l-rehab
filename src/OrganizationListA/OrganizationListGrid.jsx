import Card from "../Card";

const OrganizationListGrid = ({ crads }) => {
  return (
    <div className="card-container">
      {crads.map((card) => (
        <Card
          title={card.name}
          img={card.img}
          description={
            <p>
              type: {card.type} <br />
            </p>
          }
          id={card.id}
          path="OrganizationListPage"
        />
      ))}
    </div>
  );
};

export default OrganizationListGrid;