import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginSignUp.css';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import pass_icon from '../assets/password.png';

const LoginSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (email === "Organization@email" && password === "Organization") {
      navigate('/OrganizationHomePage');
    } else if (email === "donor@email" && password === "donor") {
      navigate('/Home');
    } else if (email === "teacher@email" && password === "teacher") {
      navigate('/Home');
    } else if (email === "doctor@email" && password === "doctor") {
      navigate('/Home');
    } else if (email === "admin@email" && password === "admin") {
      navigate('/AdminHomePage');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="container1">
      <div className="header1">
        <div className="text1">Sign In</div>
        <div className="underline1"></div>
      </div>
      <form onSubmit={handleSubmit} className="inputs1">
        {/* <div className="input1">
          <img src={user_icon} alt="User Icon" />
          <input 
            type="text" 
            name="name" 
            placeholder="name" 
            onChange={handleChange}
          />
        </div> */}
        <div className="input1">
          <img src={email_icon} alt="Email Icon" />
          <input 
            type="email" 
            name="email" 
            placeholder="email" 
            onChange={handleChange}
            required
          />
        </div>
        <div className="input1">
          <img src={pass_icon} alt="Password Icon" />
          <input 
            type={showPassword ? "text" : "password"} 
            name="password" 
            placeholder="password" 
            onChange={handleChange}
            required
          />
        </div>
        <div className="showPassword">
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={toggleShowPassword}
            />
            Show Password
          </label>
        </div>
        <div className="submit-container1">
          <button type="submit" className="submit1">Login</button>
          <div className="submit2">
            <Link to="/generalSignUp">Create an account!!</Link>
          </div>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default LoginSignUp;
