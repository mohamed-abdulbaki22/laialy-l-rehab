import React from 'react'
import SideBar from './SideBar';

function OrganizationListInfo3() {
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
        <div>Firstname: Amr</div>
        <div>Lastname: Negm</div>
        <div>Gender : Male</div>
        <div>Email : amr.negm@gmail.com</div>
        <div>Contact number: +20 109 818 9987</div>
        <div>OrganizationName : NegmDonations</div>
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
  export default OrganizationListInfo3;

