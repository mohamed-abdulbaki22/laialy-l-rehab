import Nav from "../Nav";
import { useState } from "react";
import useFetch from '../useFetch';
import { useParams } from "react-router-dom";
import "./Blood.css";
import "ldrs/ring";
import "ldrs/waveform";


const BloodDetails = () => {
    const { id } = useParams();
    const {
        data: Blood,
        error,
        isPending,
    } = useFetch("http://localhost:4000/BloodPosts/" + id);
    const [count, setCount] = useState(0)

    const updateDataInJson = async (id, updatedQuantity) => {
        try {
            await fetch(`http://localhost:4000/BloodPosts/${id}`, {
                method: 'PATCH', // or 'PUT' depending on your API
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "quantity requested": updatedQuantity }),
            });
            // Optionally, you can handle success or error here
        } catch (error) {
            console.error('Error updating Food:', error);
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
            {Blood && (
              //   <article>
              //     <h2>{clothes.type}</h2>
              //     <p>Written by {clothes.author}</p>
              //     <div>{clothes.body}</div>
              //   </article>
              <div className="heading">
                <h1>Post Details</h1>
                <p>Written by {Blood.author}</p>
                <div className="container">
                  <section className="post-body">
                    <div className="post-image">
                    <img src={`../${Blood.img}`} alt="" />
                    </div>
                    <div className="post-content">
                      <h2>{Blood.type} is required</h2>
                      <p>
                        <strong>Details:</strong>
                        <br />- <strong>Blood Type:</strong> {Blood.type}
                        <br />- <strong>hospital name:</strong> {Blood.hospital}
                        <br />- <strong>hospital area:</strong> {Blood.area}
                        <br />- <strong>governorate:</strong> {Blood.governorate}
                        <br />- <strong>hospital address:</strong> {Blood.hospitalAddress}
                        <br />- <strong>name of patient:</strong> {Blood.nameOfPatient}
                        <br />- <strong>Quantity Requested:</strong>{" "}
                        {Blood["quantity requested"]}
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
                            Blood["quantity requested"] - count;
    
                            if (updatedQuantity < 0) {
                              alert("exeded the needed donation!");
                              // If the updated quantity is negative, set it to 0
                              updateDataInJson(Blood.id, 0);
                            } else {
                              // Otherwise, update with the calculated quantity
                              updateDataInJson(Blood.id, updatedQuantity);
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
}

export default BloodDetails;









