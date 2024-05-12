import React, { useState, useEffect } from "react";
// import { Button } from "./Button";
import "../Navbar.css";

import search_white from "../assets/search-w.png";

import Notification from "../Notification";
import guc from "../assets/image.png";
import { Link } from "react-router-dom";
import myProfile from "../assets/myProfile.png";

const OrganizationNav = () => {
  return (
    <div className="nav">
      <img src={guc} alt="" className="logo" />
      <ul className="navbar-links">
        <li><Link to="/OrgazizationHomePage">Home</Link></li>
        <li><Notification/></li>
        {/* <li><Link to="/products">Products</Link></li> */}
        <li className="dropdown">
          Create Donations
          <ul className="dropdown-menu">
            <li><Link to="/CreateBloodDonation">Blood</Link></li>
            <li><Link to="/CreateMedicalDonation">Medical Supplies</Link></li>
            <li><Link to="/CreateClothesDonation">Clothes</Link></li>
            <li><Link to="/CreateSchoolDonation">school Supplies</Link></li>
            <li><Link to="/CreateToysDonation">Toys</Link></li>
            <li><Link to="/CreateFoodDonation">Food</Link></li>
            {/* Add more features as needed */}
          </ul>
        </li>
        <li><Link to="/DonationDropOff">Schedule Drop-off</Link></li>
        <li><Link to="/FulfilledPage">Fullfiled donations</Link></li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="search" />
        <img src={search_white} alt="" />
      </div>
      <Link to="/OrganizationLogin" className="log-out">Log out</Link>
      <div className="profile">
        {/* <input type="text" placeholder="search" /> */}
        <img src={myProfile} alt="" onClick={()=>{
          window.location.href='OrganizationProfile'
        }} />
      </div>
    </div>
  );
};

export default OrganizationNav;
