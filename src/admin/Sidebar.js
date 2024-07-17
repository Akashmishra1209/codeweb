// src/admin/Sidebar.js

import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="d-flex flex-column p-3 bg-light" style={{ width: '250px', height: '100vh' }}>
            <h2>Admin Panel</h2>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <NavLink to="/admin/dashboard" className="nav-link" activeClassName="active">
                        Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/admin/users" className="nav-link" activeClassName="active">
                        Users
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/admin/settings" className="nav-link" activeClassName="active">
                        Settings
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;