import Nav from "../Nav";
import { useState } from "react";
import useFetch from '../useFetch';
import { useParams } from "react-router-dom";
import "ldrs/ring";
import "ldrs/waveform";


const handleApply = (e) => {
  alert('Applied successfully');
}
const DoctorDetails = () => {
    const { id } = useParams();
    const {
        data: Doctor,
        error,
        isPending,
    } = useFetch("http://localhost:4000/DoctorPosts/" + id);
    

    
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
            {Doctor && (
              //   <article>
              //     <h2>{clothes.type}</h2>
              //     <p>Written by {clothes.author}</p>
              //     <div>{clothes.body}</div>
              //   </article>
              <div className="heading">
                <h1>Case Details</h1>
                <p>Written by {Doctor.author}</p>
                <div className="container">
                  <section className="post-body">
                    <div className="post-image">
                    <img src={Doctor.img} alt="" />
                    </div>
                    <div className="post-content">
                      <h2>{Doctor.specialty} is required</h2>
                      <p>
                        <strong>Details:</strong>
                        <br />- <strong>specialty:</strong> {Doctor.specialty}
                        <br />- <strong>hospital name:</strong> {Doctor.author}
                        <br />- <strong>hospital area:</strong> {Doctor.area}
                        <br />- <strong>governorate:</strong> {Doctor.governorate}
                        <br />- <strong>hospital address:</strong> {Doctor.hospitalAddress}
                        <br />- <strong>patient name:</strong> {Doctor.patientName}
                        <br />- <strong>patient age:</strong> {Doctor.patientAge}
                        <br />- <strong>patient gender:</strong> {Doctor.patientGender}
                        <br />- <strong>patient weight:</strong> {Doctor.patientWeight}
                        <br />- <strong>case description:</strong> {Doctor.caseDescription}
                      </p>
                      <div className="donation">

                        <button
                          onClick={handleApply}>
                          Apply 
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

export default DoctorDetails;









