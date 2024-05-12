import React, { useState, useEffect } from "react";
// import { Button } from "./Button";
import "./Navbar.css";
import logo_white from "./assets/logo-white.png";
import logo_black from "./assets/logo-black.png";
import search_white from "./assets/search-w.png";
import search_black from "./assets/search-b.png";
import night from "./assets/night.png";
import day from "./assets/day.png";
import guc from "./assets/image.png";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";
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
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="search" />
        <img src={search_white} alt="" />
      </div>
      <Link to="/OrganizationLogin" className="log-out">Log out</Link>
      <div className="profile">
        {/* <input type="text" placeholder="search" /> */}
        <img src={myProfile} alt="" onClick={()=>{
          window.location.href='DonorPage'
        }} />
      </div>
      {/* <img src={night} alt="" className="toggle_icon" /> */}
    </div>
  );
};

export default Nav;
