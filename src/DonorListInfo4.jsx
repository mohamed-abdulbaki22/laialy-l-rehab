import React from 'react'
import SideBar from './SideBar';

function DonorListInfo4() {
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
        <div>Firstname: Abdelrahman</div>
        <div>Lastname: Zakzok</div>
        <div>Gender : Male</div>
        <div>Email : abdozakzok@gmail.com</div>
        <div>Contact number: +20 120 850 4444</div>
        <div>Address : OthmanIbnAffan Street Apartment 22</div>
        <div>Area : New Cairo</div>
        <div>Governorate : Cairo</div>
        <div>VolunteerType : Doctor</div>
        <button onClick ={handleAccept}>Accept</button>
        <button onClick ={handleReject}>Reject</button>
        <button onClick ={handleDownload}>Download</button>
      </div>
      <SideBar/>
    </div>
  )
}
  export default DonorListInfo4;
