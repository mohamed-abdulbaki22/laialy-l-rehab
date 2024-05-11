import React from "react";
 

export const SideBarData = [
    {
        title:"HomePage",
        link:"/AdminHomePage"
        
    },
    {
        title:"View Donors List",
        link:"/DonorList"
    },
    {
        title:"View Organization List",
        link:"/OrgList"
    },
   
    {
        title:"Password Management",
        link:"/PasswordManagement"
        
    },
    {
        title:"View Registered Organizations",
        link:"/OrganizationPage"
        
    },


    {
        title:"Logout",
        link:"/AdminLogin"
        
    },
    
    
      /*  title:"View Registered Organizations",
        link:"/"
    },
    {
        title:"",
        link:"/"
    },
    {
        title:"Medical Supplies donation",
        link:"/"
    },
    {
        title:"blood donation",
        link:"/"
    },
    the past two should be in one place? 
    {
        title:"Hospital Locations",
        link:"/"
    },*/
];

const SideBar = () => {
    return ( 
        <div className="sidebar">
        
            <ul>
                {SideBarData.map((val, key) => (
                    <li key={key} onClick={() => {window.location.pathname = val.link}}>
                        <div>{val.title}</div>
                    </li> 
                ))}
            </ul>
        </div>
    );
}
 
export default SideBar;