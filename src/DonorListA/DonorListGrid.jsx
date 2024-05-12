import Card from "../Card";

const DonorListGrid = ({ crads }) => {
  return (
    <div className="card-container">
      {crads.map((card) => (
        <Card
          title={card.firstName}
          img={card.img}
          id={card.id}
          path="DonorListPage"
        />
      ))}
    </div>
  );
};

export default DonorListGrid;