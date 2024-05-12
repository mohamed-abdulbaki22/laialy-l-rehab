import React, { useState } from 'react';
import './index.css'; // Import the CSS file for styling

const OrganizationRegistraion = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    // username: '',
    // age: '',
    contactNo:'',
    orgAddress:'',
    area:'',
    governerate:'',
    gender:'',
    orgName:'',
    orgType:'',
    documents:null,
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
    //e.target.querySelector('button[type="submit"]').disabled = true;
    // Password match check
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Age conversion and validation
    // const age = parseInt(formData.age);
    // if (isNaN(age) || age <= 0) {
    //   setErrorMessage('Please enter a valid age');
    //   return;
    // }

    // Clear any previous error messages
    setErrorMessage('');

    // Add form data submission logic here (e.g., saving data to a database)

    try {
      // Make a POST request to the JSON server endpoint

    
      // const response = await fetch('http://localhost:4000/blogs'/*/TODO*replace blogs with the endpoint for the organization details/*/, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(formData)
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to register organization');
      // }



      //------------------------the redirection--------------------------

       window.location.href='/'

      // Clear form fields if registration is successful
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        gender: '',
        contactNo:'',
        orgAddress:'',
        orgName:'',
        orgType:'',
        governerate:'',
        area:'',
        documents:null,
      }
      //*/TODO*7ot hena elredirect ya 7ob/
    );
alert('Registration successful!');
    } catch (error) {
      // Handle any errors during the POST request
      console.error('Registration error:', error);
      setErrorMessage('Failed to register organization');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
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
      
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
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
        type="text"
        name="area"
        placeholder="Area"
        value={formData.area}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="orgAddress"
        placeholder="Address"
        value={formData.orgAddress}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="orgName"
        placeholder="organization name"
        value={formData.orgName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="orgType"
        placeholder="organization type"
        value={formData.orgType}
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
      <input
        type="text"
        name="governerate"
        placeholder="Governerate"
        value={formData.governerate}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="contactNo"
        placeholder="Contact number"
        value={formData.contactNo}
        onChange={handleChange}
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

      <button type="submit">Register</button>

      {/* Error message display */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </form>
  );
};

export default OrganizationRegistraion;
