import AdminNav from "../AdminNav";
import { useState } from "react";
import useFetch from '../useFetch';
import { useParams } from "react-router-dom";

import "ldrs/ring";
import "ldrs/waveform";

const handleDownload = () => {


    alert('Information Downloaded');
        
    
  };
  const handleAccept = () => {

    window.location.href = '/OrganizationListPage';
    alert('Organization Accepted');
        
    
  };
  const handleReject = () => {

    window.location.href = '/OrganizationListPage';
    alert('Organization Rejected');
        
    
  };
const OrganizationListDetails = () => {
    const { id } = useParams();
    const {
        data: Organization,
        error,
        isPending,
    } = useFetch("http://localhost:4000/OrganizationListPosts/" + id);
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
                      <p>
                        <strong>Information:</strong>
                        <br />- <strong>First Name:</strong> {Organization.firstName}
                        <br />- <strong>Last name:</strong> {Organization.lastName}
                        <br />- <strong>gender:</strong> {Organization.gender}
                        <br />- <strong>email:</strong> {Organization.email}
                        <br />- <strong>contact number:</strong>{Organization.contacts}
                        <br />- <strong>organization name:</strong> {Organization.name}
                        <br />- <strong>organization type:</strong> {Organization.type}
                        <br />- <strong>organization address:</strong> {Organization.address}
                        <br />- <strong>area:</strong> {Organization.area}
                        <br />- <strong>governorate:</strong> {Organization.governorate}
                        <br /><button onClick={handleDownload}> download information</button>
                      </p>
                      <div className="donation">
                        <button
                          onClick={handleAccept}
                        >
                          Accept
                        </button>
                        <button onClick={handleReject}>Reject</button>
                        
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

export default OrganizationListDetails;









