import React, { useState } from 'react';
import "./Login.css"

//import './Login.css'; // Import the CSS file for styling

const OrganizationLogin = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // State to manage error message
  const [errorMessage, setErrorMessage] = useState('');

  // Handler for form input changes
  const handleChange = (e) => {
    // Extract the name and value of the input field triggering the change event
    const { name, value } = e.target;
    // Update the form data state with the new value
    setFormData({ ...formData, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation logic
    if (formData.email === "Organization@email" && formData.password === "Organization") {
      // Redirect to the app page on successful login
      window.location.href = "./OrgazizationHomePage";
    } else 
      if (formData.email === "donor@email" && formData.password === "donor") {
        // Redirect to the app page on successful login
        window.location.href = "./Home";
      } 
    
    else 
      if (formData.email === "teacher@email" && formData.password === "teacher") {
        // Redirect to the app page on successful login
        window.location.href = "./Home";
      } 
    
    else 
      if (formData.email === "doctor@email" && formData.password === "doctor") {
        // Redirect to the app page on successful login
        window.location.href = "./Home";
      } 
      else 
        if (formData.email === "admin@email" && formData.password === "admin") {
          // Redirect to the app page on successful login
          window.location.href = "./AdminHomePage";
        }  
      else{
        setErrorMessage('Invalid email or password'); // Set error message
    
      }
    
  };
  const handleDonor = () => {
    window.location.href='RegistrationForm'
    };
  const handleOrg = () => {
    window.location.href="OrganizationRegistraion"
    };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h3 className="heading">Login to your Account</h3>
        {/* Input fields for user registration data */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button> <br/>
        <button onClick={handleDonor}>register as donor</button> <br/>
        <button onClick={handleOrg}> register as organization</button> <br/>
        {/* Error message display */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        
      </form>
      
    </div>
  );
};

export default OrganizationLogin;
