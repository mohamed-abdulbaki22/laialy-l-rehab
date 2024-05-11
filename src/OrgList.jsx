import React from 'react';
import SideBar from './SideBar';

function OrgList(){
    const handleOrg = () => {


        window.location.href = 'OrganizationListInfo1';
            
        
      };
      const handleOrg2 = () => {


        window.location.href = 'OrganizationListInfo2';
            
        
      };
      const handleOrg3 = () => {


        window.location.href = 'OrganizationListInfo3';
            
        
      };
      const handleOrg4 = () => {


        window.location.href = 'OrganizationListInfo4';
            
        
      };
      const handleOrg5 = () => {


        window.location.href = 'OrganizationListInfo5';
            
        
      };
      const handleOrg6 = () => {


        window.location.href = 'OrganizationListInfo6';
            
        
      };
    return (
      <div>
        <SideBar/>
        <div className="orgboxs">
        <div className="org-box">
            <div>Organization 1</div>
            <button onClick={handleOrg}>View Organization's Information</button>
        </div>
        <div className="org-box">
            <div>Organization 2</div>
            <button onClick={handleOrg2}>View Organization's Information</button>
        </div>
        <div className="org-box">
            <div>Organization 3</div>
            <button onClick={handleOrg3}>View Organization's Information</button>
        </div>
        <div className="org-box">
            <div>Organization 4</div>
            <button onClick={handleOrg4}>View Organization's Information</button>
        </div>
        <div className="org-box">
            <div>Organization 5</div>
            <button onClick={handleOrg5}>View Organization's Information</button>
        </div>
        <div className="org-box">
            <div>Organization 6</div>
            <button onClick={handleOrg6}>View Organization's Information</button>
        </div>
        </div>
      </div>
    );
}

export default OrgList;
