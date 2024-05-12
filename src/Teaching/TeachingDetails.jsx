import Nav from "../Nav";
import { useState } from "react";
import useFetch from '../useFetch';
import { useParams } from "react-router-dom";
import "ldrs/ring";
import "ldrs/waveform";
import location from '../assets/location.jpg'

const handleApply = (e) => {
  alert('Applied successfully');
  window.location.href="/TeachingPage"
}

const TeachingDetails = () => {
    const { id } = useParams();
    const {
        data: Teacher,
        error,
        isPending,
    } = useFetch("http://localhost:4000/TeachingPosts/" + id);
    

    
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
            {Teacher && (
              //   <article>
              //     <h2>{clothes.type}</h2>
              //     <p>Written by {clothes.author}</p>
              //     <div>{clothes.body}</div>
              //   </article>
              <div className="heading">
                <h1>Opportunity Details</h1>
                <p>Written by {Teacher.author}</p>
                <div className="container">
                  <section className="post-body">
                    <div className="post-image">
                    <img src={Teacher.img} alt="" />
                    </div>
                    <div className="post-content">
                      <h2>{Teacher.subject} is required</h2>
                      <p>
                        <strong>Details:</strong>
                        <br />- <strong>subject:</strong> {Teacher.subject}
                        <br />- <strong>school name:</strong> {Teacher.author}
                        <br />- <strong>school area:</strong> {Teacher.area}
                        <br />- <strong>governorate:</strong> {Teacher.governorate}
                        <br />- <strong>school address:</strong> {Teacher.schoolAddress}
                        <br />- <strong>required grade:</strong> {Teacher.requiredGrade}
                        <br />- <strong>number of students:</strong> {Teacher.numberOfStudents}
                      </p>
                      <img className="map" src={location} alt="Location" />
                      <div className="donation">
                      <br />

                        <button
                          onClick = {handleApply}>
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

export default TeachingDetails;









