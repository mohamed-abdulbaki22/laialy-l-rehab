import React from "react";
import ClothesDonationPage from "../ClothesDonation/ClothesDonationPage"; 

export const SideBarData = [
    {
        title:"Volunteer",
        link:"/"
    },
    {
        title:"Document Upload",
        link:"/"
    },
    {
        title:"Clinic Location",
        link:"/"
    },
    {
        title:"Subject and Class Selection",
        link:"/"
    },
    /*the past four should be in one place? */
    {
        title:"Requested Donation",
        link:"/"
    },
    {
         title: "Clothes Donation", 
         link: "/ClothesDonationPage" 
    },
    {
        title:"School Supplies Donation",
        link:"/SchoolDonationPage"
    },
    {
        title:"toys donation",
        link:"/ToysDonationPage"
    },
    {
        title:"food donation",
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
    /*the past two should be in one place? */
    {
        title:"Hospital Locations",
        link:"/"
    },
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