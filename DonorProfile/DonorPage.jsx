import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../Nav';
import "ldrs/ring";
import "ldrs/waveform";

const DonorPage = () => {
    const { id } = 1;
    const [Donor, setDonor] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/DonorPosts/1')
            .then((res) => {
                if (!res.ok) {
                    throw Error('Could not fetch data');
                }
                return res.json();
            })
            .then((data) => {
                setDonor(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            });
    }, [id]);

    return (
        <div>
            <Nav />
            {isPending && (
                <div className="loader">
                    <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform>
                </div>
            )}
            {error && <div>{error}</div>}
            {Donor && (
                <div className="heading">
                <h1>My Profile</h1>
                <div className="container">
                  <section className="post-body">
                    <div className="avatar">
                    <img className='avatar' src={Donor.img} alt="" />
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
                      <div className="donation">

                        <button
                          onClick={() => {
                            window.location.href = "EditDonorPage"; // Redirect to the desired page
                          }}
                        >
                          Edit  
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
                </div>
            )}
        </div>
    );
};

export default DonorPage;
