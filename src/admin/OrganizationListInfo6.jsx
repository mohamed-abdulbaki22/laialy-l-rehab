import React from 'react'
import SideBar from './SideBar';

function OrganizationListInfo6() {
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
        <div>Firstname: Mohamed</div>
        <div>Lastname: Abdelbaky</div>
        <div>Gender : Male</div>
        <div>Email : mohamed.Abdelbaky@gmail.com</div>
        <div>Contact number: +20 110 011 2222</div>
        <div>OrganizationName : FadloDonation</div>
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
  export default OrganizationListInfo6;

