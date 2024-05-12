import AdminNav from "../AdminNav";
import { useState } from "react";
import useFetch from '../useFetch';
import { useParams } from "react-router-dom";
import "ldrs/ring";
import "ldrs/waveform";


const handleDelete = () => {
    alert('Donor Deleted');
    window.location.href='/RegDonorsPage'
};   

const RegDonorsDetails = () => {
    const { id } = useParams();
    const {
        data: Donor,
        error,
        isPending,
    } = useFetch("http://localhost:4000/DonorPosts/" + id);
    

    
    return (
        <div>
          <AdminNav />
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
            {Donor && (
              //   <article>
              //     <h2>{clothes.type}</h2>
              //     <p>Written by {clothes.author}</p>
              //     <div>{clothes.body}</div>
              //   </article>
              <div className="heading">
                <h1>Donor Details</h1>
                <div className="container">
                  <section className="post-body">
                    <div className="post-image">
                    <img src={Donor.img} alt="" />
                    </div>
                    <div className="post-content">
                      {/* <h2>{Organization.type}</h2> */}
                      <p>
                        <strong>Details:</strong>
                        <br />- <strong>first name:</strong> {Donor.firstName}
                        <br />- <strong>last name:</strong> {Donor.lastName}
                        <br />- <strong>gender:</strong> {Donor.gender}
                        <br />- <strong>email:</strong> {Donor.email}
                        <br />- <strong>contact number:</strong> {Donor.contacts}
                        <br />- <strong>address:</strong> {Donor.address}
                        <br />- <strong>area:</strong> {Donor.area}
                        <br />- <strong>governorate:</strong> {Donor.governorate} 
                        <br />- <strong>volunteer type:</strong> {Donor.volunteerType}
                      </p>
                      <img className="map" src={location} alt="Location" />
                      <div className="donation">
                      <br />
                        <button
                          onClick= {handleDelete}
                        >
                          Delete Donor 
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

export default RegDonorsDetails;









