import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../Nav';
import "ldrs/ring";
import "ldrs/waveform";


const OrganizationProfile = () => {
    const { id } = 1;
    const [Organization, setOrganization] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/Organization/1')
            .then((res) => {
                if (!res.ok) {
                    throw Error('Could not fetch data');
                }
                return res.json();
            })
            .then((data) => {
                setOrganization(data);
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
            {Organization && (
                <div className="heading">
                <h1>Organization Profile</h1>
                <div className="container">
                  <section className="post-body">
                    <div className="avatar">
                    {/* <img className='avatar' src={Organization.img} alt="" /> */}
                    </div>
                    <div className="post-content">
                      {/* <h2>{Organization.type}</h2> */}
                      <p>
                        <strong>Details:</strong>
                        
                        <br />- <strong>first name:</strong> {Organization.firstName}
                        <br />- <strong>last name:</strong> {Organization.lastName}
                        <br />- <strong>gender:</strong> {Organization.gender}
                        <br />- <strong>email:</strong> {Organization.email}
                        <br />- <strong>contact number:</strong> {Organization.contactNumber}
                        <br />- <strong>address:</strong> {Organization.address}
                        <br />- <strong>area:</strong> {Organization.area}
                        <br />- <strong>governorate:</strong> {Organization.governorate}
                      </p>
                      <div className="donation">

                        <button
                          onClick={() => {
                            window.location.href = "EditOrganizationProfile"; // Redirect to the desired page
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

export default OrganizationProfile;