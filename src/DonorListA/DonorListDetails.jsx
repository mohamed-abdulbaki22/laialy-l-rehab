import Nav from "../Nav";
import { useState } from "react";
import useFetch from '../useFetch';
import { useParams } from "react-router-dom";
import AdminNav from "../AdminNav";
import "ldrs/ring";
import "ldrs/waveform";

const handleDownload = () => {


    alert('Information Downloaded');
        
    
  };
  const handleAccept = () => {

    window.location.href = '/DonorListPage';
    alert('Donor Accepted');
        
    
  };
  const handleReject = () => {

    window.location.href = '/DonorListPage';
    alert('Donor Rejected');
        
    
  };
const DonorListDetails = () => {
    const { id } = useParams();
    const {
        data: Donor,
        error,
        isPending,
    } = useFetch("http://localhost:4000/DonorListPosts/" + id);
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
                      <p>
                        <strong>Information:</strong>
                        <br />- <strong>First Name:</strong> {Donor.firstName}
                        <br />- <strong>Last name:</strong> {Donor.lastName}
                        <br />- <strong>gender:</strong> {Donor.gender}
                        <br />- <strong>area:</strong> {Donor.area}
                        <br />- <strong>governorate:</strong> {Donor.governorate}
                        <br />- <strong>email:</strong> {Donor.email}
                        <br />- <strong>address:</strong> {Donor.address}
                        <br />- <strong>contact number:</strong>{Donor.contacts}
                        <br />- <strong>volunteer type:</strong> {Donor.type}
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

export default DonorListDetails;









