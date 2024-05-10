import CC from "./assets/map.jpg";
import Nav from "./Nav";
const CurrentDetails = () => {
  return (
    <div>
      <Nav />
      <div className="heading">
        <h1>Donation Details</h1>
        <p>For Organization X </p>
        <div className="container">
          <section className="post-body">
            <div className="post-image">
              <img src={CC} alt="" />
            </div>
            <div className="post-content">
              <h2>Drop-off Details:</h2>
              <p>
                <br />- <strong>Estiamated Date: </strong>20/3/2022
                <br />- <strong>Estiamated Time: </strong>4:30 - 5:50 PM
                <br />- <strong>Quantity Donated:</strong> 5
              </p>
              <h2>Driver Details:</h2>
              <p>
                <br />- <strong>Name: </strong>Marcus Rashford
                <br />- <strong>Phone Number: </strong>+98 0777 5000
                <br />- <strong>Vehicle Id:</strong> ABCD 2390
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CurrentDetails;
