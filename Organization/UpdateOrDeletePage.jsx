import OrganizationNav from "./OrganizationNav";
import { useState } from "react";
import useFetch from '../useFetch';
import { useParams } from "react-router-dom";
// import "./Food.css";
import "ldrs/ring";
import "ldrs/waveform";

const UpdateOrDeletePage = () => {
    const { id } = useParams();
    const {
        data: Data,
        error,
        isPending,
    } = useFetch("http://localhost:4000/myposts/" + id);
    const [count, setCount] = useState(0)

    // const updateDataInJson = async (id, updatedQuantity) => {
    //     try {
    //         await fetch(`http://localhost:4000/myosts/${id}`, {
    //             method: 'PATCH', // or 'PUT' depending on your API
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ "quantity requested": updatedQuantity }),
    //         });
    //         // Optionally, you can handle success or error here
    //     } catch (error) {
    //         console.error('Error updating Food:', error);
    //         // Handle error
    //     }
    // };

    return (
        <div>
          <OrganizationNav />
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
            {Data && (
              //   <article>
              //     <h2>{clothes.type}</h2>
              //     <p>Written by {clothes.author}</p>
              //     <div>{clothes.body}</div>
              //   </article>
              <div className="heading">
                <h1>Post Details</h1>
                <div className="container">
                  <section className="post-body">
                    <div className="post-image">
                      <img src={`../${Data.img}`} alt="" />
                    </div>
                    <div className="post-content">
                      <h2>{Data.type}s are required</h2>
                      <p>
                        <strong>Details:</strong>
                        <br />- <strong>Type:</strong> {Data.type}
                        <br />- <strong>name:</strong> {Data.name}
                        <br />- <strong>Quantity Requested:</strong>{" "}
                        {Data["quantity requested"]}
                      </p>
                      <div className="donation">
                            <button onClick={()=>{
                                alert("Post Deleted successfuly")
                                window.location.href="/OrgazizationHomePage"
                            
                            }
                            }>Delete</button>
                            <button onClick={()=>{
                                if (Data.postType === "Clothes") {
                                    window.location.href="/CreateClothesDonation"
                                }
                                else if (Data.postType === "Food") {
                                    window.location.href="/CreateFoodDonation"
                                }
                                else if (Data.postType === "Blood") {
                                    window.location.href="/CreateBloodDonation"
                                }
                                else if (Data.postType === "Toys") {
                                    window.location.href="/CreateToysDonation"
                                }
                                else if (Data.postType === "School") {
                                    window.location.href="/CreateSchoolDonation"
                                }
                                else if (Data.postType === "Medical") {
                                    window.location.href="/CreateMedicalDonation"
                                }
                            
                            }
                            }>update</button>
                            <button onClick={()=>{
                                window.location.href="/OrgazizationHomePage"
                            
                            }
                            }>Back</button>
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

export default UpdateOrDeletePage;