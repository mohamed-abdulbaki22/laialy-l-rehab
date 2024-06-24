import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginSignUp.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import pass_icon from "../assets/password.png";
import location_icon from "../assets/a7a.png"; // Changed to location_icon for clarity
import contact from "../assets/contact.png";

const DonorRegisteration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    area: "",
    address: "",
    governerate: "",
    contactNo: "",
    type: "",
    gender: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      // const response =await fetch('http://localhost:4000/blogs'/*/TODO*replace blogs with the endpoint for the organization details/*/, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(formData)
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to register user');
      // }
      switch (formData.type) {
        //------------------------the redirection--------------------------
        case 'regular':
          window.location.href = '/';
          break;
        case 'doctor':
          window.location.href = '/Doctor';
          break;
        case 'teacher':
          window.location.href = '/Teacher';
          break;
        default:
          break;
      }

      // Clear form fields if registration is successful
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        //username: '',
        //age: ''
        contactNo:'',
        address:'',
        governerate:'',
        area:'',
       // documents:null,
        type:'',
      }
      /*/TODO*7ot hena elredirect ya 7ob/*/
    );

      alert('Registration successful!');
    } catch (error) {
      // Handle any errors during the POST request
      console.error('Registration error:', error);
      setErrorMessage('Failed to register user');
    }
  };
  return (
    <div className="container1">
      <div className="header1">
        <div className="text1">Donor Sign Up</div>
        <div className="underline1"></div>
      </div>
      <form onSubmit={handleSubmit} className="inputs1">
        <div className="input1">
          <img src={user_icon} alt="User Icon" className="icon-small" />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />
        </div>
        <div className="input1">
          <img src={user_icon} alt="User Icon" className="icon-small" />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>
        <div className="input1">
          <img src={email_icon} alt="Email Icon" className="icon-small" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input1">
          <img src={pass_icon} alt="Password Icon" className="icon-small" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input1">
          <img src={pass_icon} alt="Password Icon" className="icon-small" />
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input1">
          <img src={location_icon} alt="Location Icon" className="icon-small" />
          <input
            type="text"
            name="area"
            placeholder="Area"
            value={formData.area}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input1">
          <img src={location_icon} alt="Location Icon" className="icon-small" />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input1">
          <img src={location_icon} alt="Location Icon" className="icon-small" />
          <input
            type="text"
            name="governerate"
            placeholder="Governorate"
            value={formData.governerate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input1">
          <img src={contact} alt="Contact Icon" className="icon-small" />
          <input
            type="tel"
            name="contactNo"
            placeholder="Contact number"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="select1">
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Type</option>
            <option value="regular">Regular</option>
            <option value="doctor">Doctor</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <div className="select1">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="submit-container1">
          <button type="submit" className="submit1">
            Sign Up
          </button>
          <div className="submit2">
            <Link to="/generalSignUp">Create an account!!</Link>
          </div>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default DonorRegisteration;
