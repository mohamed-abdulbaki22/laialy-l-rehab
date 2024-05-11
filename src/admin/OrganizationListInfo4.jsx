import React from 'react'
import SideBar from './SideBar';

function OrganizationListInfo4() {
  const handleDownload = () => {


    alert('Information Downloaded');
        
    
  };
  const handleAccept = () => {

    window.location.href = 'OrgList';
    alert('Organization Accepted');
        
    
  };
  const handleReject = () => {

    window.location.href = 'OrgList';
    alert('Organization Rejected');
        
    
  };
  return (
    <div>
      <div className="DLinfo">
        <h1>Organization's Info</h1>
        <div>Firstname: Abdelrahman</div>
        <div>Lastname: Zakzouk</div>
        <div>Gender : Male</div>
        <div>Email : Abdelrahman.Zakzouk@gmail.com</div>
        <div>Contact number: +20 111 245 2455</div>
        <div>OrganizationName : ZakzoukDonation</div>
        <div>OrganizationType : Health Sector</div>
        <div>OrganizationAddress : OthmanIbnAffan Street Apartment 22</div>
        <div>Area : New Cairo</div>
        <div>Governorate : Cairo</div>
        <button onClick ={handleAccept}>Accept</button>
        <button onClick ={handleReject}>Reject</button>
        <button onClick ={handleDownload}>Download</button>
      </div>
      <SideBar/>
    </div>
  )
}
  export default OrganizationListInfo4;

