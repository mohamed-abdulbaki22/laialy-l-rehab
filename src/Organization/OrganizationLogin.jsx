import React, { useState } from 'react';
import "./Login.css";

const OrganizationLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email === "Organization@email" && formData.password === "Organization") {
      window.location.href = "./OrgazizationHomePage";
    } else if (formData.email === "donor@email" && formData.password === "donor") {
      window.location.href = "./Home";
    } else if (formData.email === "teacher@email" && formData.password === "teacher") {
      window.location.href = "./Home";
    } else if (formData.email === "doctor@email" && formData.password === "doctor") {
      window.location.href = "./Home";
    } else if (formData.email === "admin@email" && formData.password === "admin") {
      window.location.href = "./AdminHomePage";
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  const handleDonor = () => {
    window.location.href = 'RegistrationForm';
  };

  const handleOrg = () => {
    window.location.href = "OrganizationRegistraion";
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h3 className="heading">Login to your Account</h3>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={toggleShowPassword}
            />
            Show Password
          </label>
        </div>
        <button type="submit">Login</button> <br />
        <button className="register-button" onClick={handleDonor}>Register as Donor</button> <br />
        <button className="register-button" onClick={handleOrg}>Register as Organization</button> <br />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default OrganizationLogin;
