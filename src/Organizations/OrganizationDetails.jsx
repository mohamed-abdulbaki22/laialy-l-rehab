import Nav from "../Nav";
import { useState } from "react";
import useFetch from '../useFetch';
import { useParams } from "react-router-dom";
import "ldrs/ring";
import "ldrs/waveform";
import location from '../assets/location.jpg'


const OrganizationDetails = () => {
    const { id } = useParams();
    const {
        data: Organization,
        error,
        isPending,
    } = useFetch("http://localhost:4000/OrganizationPosts/" + id);
    

    
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
            {Organization && (
              //   <article>
              //     <h2>{clothes.type}</h2>
              //     <p>Written by {clothes.author}</p>
              //     <div>{clothes.body}</div>
              //   </article>
              <div className="heading">
                <h1>Organization Details</h1>
                <div className="container">
                  <section className="post-body">
                    <div className="post-image">
                    <img src={Organization.img} alt="" />
                    </div>
                    <div className="post-content">
                      {/* <h2>{Organization.type}</h2> */}
                      <p>
                        <strong>Details:</strong>
                        <br />- <strong>name:</strong> {Organization.author}
                        <br />- <strong>type:</strong> {Organization.type}
                        <br />- <strong>area:</strong> {Organization.area}
                        <br />- <strong>governorate:</strong> {Organization.governorate}
                        <br />- <strong>address:</strong> {Organization.address}
                        <br />- <strong>contacts:</strong> {Organization.contacts}
                      </p>
                      <img className="map" src={location} alt="Location" />
                      <div className="donation">
                      <br />
                        <button
                          onClick={() => {
                            window.location.href = "/"; // Redirect to the desired page
                          }}
                        >
                          Homepage 
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

export default OrganizationDetails;









