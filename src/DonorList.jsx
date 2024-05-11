import React from 'react';
import SideBar from './SideBar';

function DonorList(){
    const handleDonor = () => {


        window.location.href = 'DonorListInfo1';
            
        
      };
      const handleDonor2 = () => {


        window.location.href = 'DonorListInfo2';
            
        
      };
      const handleDonor3 = () => {


        window.location.href = 'DonorListInfo3';
            
        
      };
      const handleDonor4 = () => {


        window.location.href = 'DonorListInfo4';
            
        
      };
      const handleDonor5 = () => {


        window.location.href = 'DonorListInfo5';
            
        
      };
      const handleDonor6 = () => {


        window.location.href = 'DonorListInfo6';
            
        
      };
    return (
      <div>
        <SideBar/>
        <div className="donorboxs">
        <div className="donor-box">
            <div>Donor 1</div>
            <button onClick={handleDonor}>View Donor's Information</button>
        </div>
        <div className="donor-box">
            <div>Donor 2</div>
            <button onClick={handleDonor2}>View Donor's Information</button>
        </div>
        <div className="donor-box">
            <div>Donor 3</div>
            <button onClick={handleDonor3}>View Donor's Information</button>
        </div>
        <div className="donor-box">
            <div>Donor 4</div>
            <button onClick={handleDonor4}>View Donor's Information</button>
        </div>
        <div className="donor-box">
            <div>Donor 5</div>
            <button onClick={handleDonor5}>View Donor's Information</button>
        </div>
        <div className="donor-box">
            <div>Donor 6</div>
            <button onClick={handleDonor6}>View Donor's Information</button>
        </div>
        </div>
      </div>
    );
}

export default DonorList;
