import React, { useState } from 'react';
import SideBar from './SideBar';


const PasswordManagement = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [cnewPassword, setcNewPassword] = useState('');
    const [error, setError] = useState('');

    const handlePass = () => {
        if (oldPassword.trim() === '' || newPassword.trim() === '' || cnewPassword.trim() === '') {
            setError('Old password and new password are required');
        } else if (oldPassword.trim() !== '123') {
            setError('Old password is wrong');
        } else if (newPassword.trim() == '123'){
          setError('The new password is the same as the old');
        } else if (cnewPassword.trim() !== newPassword.trim()){
            setError('The new password must be the same as the confirm password');
        } else{
            alert('Password Changed');
        }
    };  

    return (
        
        <div>
            <div className="passbox">
            <h2>Password Management</h2>
            <div>

                <label>Enter The Old Password:</label>
                <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
            </div>
            <div>
                <label>Enter the New Password:</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>
            <div>
                <label>Confirm the New Password:</label>
                <input
                    type="password"
                    value={cnewPassword}
                    onChange={(e) => setcNewPassword(e.target.value)}
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={handlePass}>Change Password</button>
            
            </div>
            
            <SideBar/>
        </div>
        
    );
};

export default PasswordManagement;
