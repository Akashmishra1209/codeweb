// src/admin/Admin.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout, isAuthenticated } from './auth';

const Admin = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!isAuthenticated()) {
        navigate('/login');
    }

    return (
        <div>
            <h1>Admin Panel</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Admin;