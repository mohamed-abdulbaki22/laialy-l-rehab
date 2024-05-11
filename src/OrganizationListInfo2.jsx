import React from 'react'
import SideBar from './SideBar';

function OrganizationListInfo2() {
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
        <div>Firstname: Rabie</div>
        <div>Lastname: Zewil</div>
        <div>Gender : Male</div>
        <div>Email : Rabie.zewil@gmail.com</div>
        <div>Contact number: +20 112 730 3382</div>
        <div>OrganizationName : AYB</div>
        <div>OrganizationType : Refugee</div>
        <div>OrganizationAddress : ElWehda Street</div>
        <div>Area : ElHawamdya</div>
        <div>Governorate : Giza</div>
        <button onClick ={handleAccept}>Accept</button>
        <button onClick ={handleReject}>Reject</button>
        <button onClick ={handleDownload}>Download</button>
      </div>
      <SideBar/>
    </div>
  )
}
  export default OrganizationListInfo2;

