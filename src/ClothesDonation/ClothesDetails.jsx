import Nav from "../Nav";
import { useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./clothes.css";
import "ldrs/ring";
import "ldrs/waveform";
const ClothesDetails = () => {
  const { id } = useParams();
  const {
    data: clothes,
    error,
    isPending,
  } = useFetch("http://localhost:4000/ClothesPosts/" + id);
  const [count, setCount] = useState(0);

  const updateClothes = async (id, updatedQuantity) => {
    try {
      await fetch(`http://localhost:4000/ClothesPosts/${id}`, {
        method: "PATCH", // or 'PUT' depending on your API
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "quantity requested": updatedQuantity }),
      });
      // Optionally, you can handle success or error here
    } catch (error) {
      console.error("Error updating clothes:", error);
      // Handle error
    }
  };

  return (
    <div>
      <Nav />
      <div className="info">
        {isPending && (
          <div className="loader">
            <l-waveform
              size="35"
              stroke="3.5"
              speed="1"
              color="black"
            ></l-waveform>
          </div>
        )}
        {error && <div>{error}</div>}
        {clothes && (
          //   <article>
          //     <h2>{clothes.type}</h2>
          //     <p>Written by {clothes.author}</p>
          //     <div>{clothes.body}</div>
          //   </article>
          <div className="heading">
            <h1>Post Details</h1>
            <p>Written by {clothes.author}</p>
            <div className="container">
              <section className="post-body">
                <div className="post-image">
                  <img src={`../${clothes.img}`} alt="" />
                </div>
                <div className="post-content">
                  <h2>{clothes.type}s are required</h2>
                  <p>
                    <strong>Details:</strong>
                    <br />- <strong>Type:</strong> {clothes.type}
                    <br />- <strong>Gender:</strong> {clothes.gender}
                    <br />- <strong>Age Group:</strong> {clothes.age}
                    <br />- <strong>Season:</strong> {clothes.season}
                    <br />- <strong>Material:</strong> {clothes.material}
                    <br />- <strong>Quantity Requested:</strong>{" "}
                    {clothes["quantity requested"]}
                  </p>
                  <div className="donation">
                    <button
                      onClick={() => {
                        if (count > 0) setCount(count - 1);
                      }}
                    >
                      -
                    </button>{" "}
                    <label htmlFor="">amount is {count}</label>
                    <button onClick={() => setCount(count + 1)}>+</button>
                    <button
                      onClick={() => {
                        

                        const updatedQuantity =
                          clothes["quantity requested"] - count;

                        if (updatedQuantity < 0) {
                          alert("exeded the needed donation!");
                          // If the updated quantity is negative, set it to 0
                          updateClothes(clothes.id, 0);
                        } else {
                          // Otherwise, update with the calculated quantity
                          updateClothes(clothes.id, updatedQuantity);
                        }
                        setCount(0);
                        window.location.href = "/DonationDetails"; // Redirect to the desired page
                      }}
                    >
                      Donate
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClothesDetails;
