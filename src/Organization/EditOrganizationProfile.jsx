import React, { useState } from 'react';
import './Edit.css'
import Nav from '../Nav';

const handleSave = (e) => {
  alert('Account updated');
  window.location.href='OrganizationProfile';
}

const EditOrganizationProfile = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    organizationname: '',
    organizationtype: '',
    password:'',
    lastName: '',
    contactNo:'',
    address:'',
    area:'',
    governerate:'',
    gender:'',
    documents:null,
    type:'',
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
  
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setFormData({ ...formData, documents: file }); // Store the selected file in state
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password match check


    // Clear any previous error messages
    setErrorMessage('');

    // Add form data submission logic here (e.g., saving data to a database)
    try {
      // Make a POST request to the JSON server endpoint
      const response = await fetch('http://localhost:4000/blogs'/*TODO*replace blogs with the endpoint for the organization details*/, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      // Clear form fields if registration is successful
      setFormData({
        email: '',
        firstName: '',
        organizationname: '',
        organizationtype: '',
        password:'',
        lastName: '',
        contactNo:'',
        address:'',
        area:'',
        governerate:'',
        gender:'',
        documents:null,
        type:'',
      });
      
      alert('Changed successful!');
    } catch (error) {
      // Handle any errors during the POST request
      console.error('Error:', error);
      setErrorMessage('Failed to edit user');
    }
  };

  return (
    <div> 
        <Nav />
        <form className="form-container" onSubmit={handleSubmit}>
      {/* Input fields for user registration data */}
      
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="password"
        placeholder="password"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="organizationname"
        placeholder="Organization Name"
        value={formData.organizationname}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="organizationtype"
        placeholder="Organization Type"
        value={formData.organizationtype}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="area"
        placeholder="Area"
        value={formData.area}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="governerate"
        placeholder="Governorate"
        value={formData.governerate}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="contactNo"
        placeholder="Contact number"
        value={formData.contactNo}
        onChange={handleChange}
        required
      />
      {/* New input field for documents */}
      <input
        type="file"
        name="documents"
        onChange={handleFileChange}
        required
      />
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <button type="save" onClick = {handleSave}>Save</button>
      <button type="cancel" onClick={()=>{
        window.location.href='OrganizationProfile'
      }}>Cancel</button>

      {/* Error message display */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </form>
        </div>
    
  );
};

export default EditOrganizationProfile;

