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

const AdminNav = () => {
  return (
    <div className="nav">
      <img src={guc} alt="" className="logo" />
      <ul className="navbar-links">
        <li><Link to="/AdminHomePage">Home</Link></li>
        <li><Link to="/PasswordManagement">Password management</Link></li>
        {/* <li><Link to="/products">Products</Link></li> */}
        <li className="dropdown">
          Requested
          <ul className="dropdown-menu">
            <li><Link to="/DonorListPage">view donor list</Link></li>
            <li><Link to="/OrganizationListPage">view organization list</Link></li>
           
            {/* Add more features as needed */}
          </ul>
        </li>
        <li className="dropdown">
          Registered
          <ul className="dropdown-menu">
            <li><Link to="/RegDonorsPage">view donor list</Link></li>
            <li><Link to="/RegOrganizationPage">view organization list</Link></li>

            {/* Add more features as needed */}
          </ul>
        </li>
        <li><Link to="/about">About</Link></li>
      </ul>
    
      <Link to="/OrganizationLogin" className="log-out">Log out</Link>
      {/* <img src={night} alt="" className="toggle_icon" /> */}
    </div>
  );
};

export default AdminNav;
