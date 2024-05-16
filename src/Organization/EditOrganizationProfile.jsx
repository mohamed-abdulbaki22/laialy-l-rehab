import OrganizationNav from "./OrganizationNav";
import { useState } from "react";
import useFetch from '../useFetch';
import { useParams } from "react-router-dom";

import "ldrs/ring";
import "ldrs/waveform";

const UpdateOrDeletePage = () => {
  const { id } = useParams();
  const {
    data: Data,
    error,
    isPending,
  } = useFetch("http://localhost:4000/Organization/"+id );
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
                  <strong>Details:</strong>
                  {Data.postType === "Clothes" && (
                    <div>
                      type: {Data.type}<br />
                      gender: {Data.gender}<br />
                      age: {Data.age}<br />
                      season: {Data.season}<br />
                      material: {Data.material}
                    </div>
                  )}
                  {Data.postType === "Food" && (
                    <div>
                      type: {Data.type}<br />
                      name: {Data.name}<br />
                      note: {Data.note}
                    </div>
                  )}
                  {Data.postType === "Blood" && (
                    <div>
                      type: {Data.type}<br />
                      name of patient: {Data.nameOfPatient}<br />
                      hospital: {Data.hospital}<br />
                      governorate: {Data.season}<br />
                      area: {Data.area}<br />
                      hospital address: {Data.hospitalAddress}
                    </div>
                  )}
                  {Data.postType === "Toys" && (
                    <div>
                      type: {Data.type}<br />
                      gender: {Data.gender}<br />
                      age: {Data.age}<br />
                      category: {Data.category}<br />
                    </div>
                  )}
                  {Data.postType === "School" && (
                    <div>
                      {Data.type === "book" && (
                        <div>
                          Type: {Data.type}<br />
                          Book name: {Data.name}<br />
                          Book Author: {Data.bookAuthor}<br />
                          Language: {Data.language}<br />
                          Edition: {Data.edition}<br />
                          Summary: {Data.summary}
                        </div>
                      )}
                      {!Data.type === "book" && (
                        <div>
                          Type: {Data.type}<br />
                          Stationary item name: {Data.name}
                        </div>
                      )}
                    </div>
                  )}


                  {Data.postType === "Medical" && (
                    <div>
                      type: {Data.type}<br />
                      name: {Data.name}<br />
                      use: {Data.use}<br />
                    </div>
                  )}
                  <p>

                    <br />- <strong>Quantity Requested:</strong>{" "}
                    {Data["quantity requested"]}
                  </p>
                  <div className="donation">
                    
                    <button onClick={() => {
                      window.location.href = "/"

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