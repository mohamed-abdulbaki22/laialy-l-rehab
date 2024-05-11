import React from 'react'
import SideBar from './SideBar';

function DonorListInfo3() {
  const handleDownload = () => {


    alert('Information Downloaded');
        
    
  };
  const handleAccept = () => {

    window.location.href = 'DonorList';
    alert('Donor Accepted');
        
    
  };
  const handleReject = () => {

    window.location.href = 'DonorList';
    alert('Donor Rejected');
        
    
  };
  return (
    <div>
      <div className="DLinfo">
        <h1>Donor's Information</h1>
        <div>Firstname: Amr</div>
        <div>Lastname: Negm</div>
        <div>Gender : Male</div>
        <div>Email : amrnegm@gmail.com</div>
        <div>Contact number: +20 109 818 9987</div>
        <div>Address : OthmanIbnAffan Street Apartment 22</div>
        <div>Area : New Cairo</div>
        <div>Governorate : Cairo</div>
        <div>VolunteerType : Teacher</div>
        <button onClick ={handleAccept}>Accept</button>
        <button onClick ={handleReject}>Reject</button>
        <button onClick ={handleDownload}>Download</button>
      </div>
      <SideBar/>
    </div>
  )
}
  export default DonorListInfo3;

