import React, { useState } from 'react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username.trim() == '' || password.trim() == '') {


      setError('Username and password are required');
    } else {
         if (username.trim() !== '123' && password.trim() !== '123'){
            setError('Username and password are wrong');
    }
        else{
            window.location.href = 'AdminHomePage';
        }
    }
  };

  return (
    <div>
      <h2>Admin Login Page</h2>
      <div>
        <label>AdminUsername:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>AdminPassword:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;