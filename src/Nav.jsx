import React, { useState, useEffect } from "react";
// import { Button } from "./Button";
import "./Navbar.css";
import search_white from "./assets/search-w.png";
import guc from "./assets/image.png";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";
import myProfile from './assets/myProfile.png'
const Nav = () => {
  const handleSearch = () => {
    const donations = ["clothes", "blood", "school supplies", "toys", "food","medical supplies"];
    if (donations[0].toLowerCase().includes(search))
      window.location.href = "/ClothesDonationPage";
    if (donations[1].toLowerCase().includes(search))
      window.location.href = "/BloodDonationPage";
    if (donations[2].toLowerCase().includes(search))
      window.location.href = "/SchoolDonationPage";
    if (donations[3].toLowerCase().includes(search))
      window.location.href = "/ToysDonationPage";
    if (donations[4].toLowerCase().includes(search))
      window.location.href = "/FoodDonationPage";
    if (donations[5].toLowerCase().includes(search))
      window.location.href = "/MedicalDonationPage";
    
  };
  const [search, setSearch] = useState("");
  return (
    <div className="nav">
      <img src={guc} alt="" className="logo" />
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Notification />
        </li>
        <li className="dropdown">
          Donations
          
          <ul className="dropdown-menu">
            <li><Link to="/BloodDonationPage">Blood</Link></li>
            <li><Link to="/MedicalDonationPage">Medical Supplies</Link></li>
            <li><Link to="/ClothesDonationPage">Clothes</Link></li>
            <li><Link to="/SchoolDonationPage">school Supplies</Link></li>
            <li><Link to="/ToysDonationPage">Toys</Link></li>
            <li><Link to="/FoodDonationPage">Food</Link></li>
            {/* Add more features as needed */}
          </ul>
        </li>
        {/* <li><Link to="/products">Products</Link></li> */}
        <li className="dropdown">
          Volunteering
          <ul className="dropdown-menu">
            <li><Link to="/TeachingPage">Teaching</Link></li>
            <li><Link to="/DoctorPage">Medical Cases</Link></li>

            {/* Add more features as needed */}
          </ul>
        </li>
        <li><Link to="/OrganizationPage">Organizations</Link></li>
      </ul>
      <div className="search-box" onChange={(e) => setSearch(e.target.value)}>
        <input type="text" placeholder="search by donation type" />
        <img src={search_white} alt="" onClick={handleSearch}/>
      </div>
      <Link to="/OrganizationLogin" className="log-out">Log out</Link>
      <div className="profile">
        {/* <input type="text" placeholder="search" /> */}
        <img src={myProfile} alt="" onClick={()=>{
          window.location.href='DonorPage'
        }} className="profile-pic"/>
      </div>
      {/* <img src={night} alt="" className="toggle_icon" /> */}
    </div>
  );
};

export default Nav;
