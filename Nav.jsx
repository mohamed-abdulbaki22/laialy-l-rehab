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
import myProfile from "./assets/myProfile.png";

const Nav = () => {
  return (
    <div className="nav">
      <img src={guc} alt="" className="logo" />
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Notification">Notification</Link></li>
        {/* <li><Link to="/products">Products</Link></li> */}
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

export default Nav;
