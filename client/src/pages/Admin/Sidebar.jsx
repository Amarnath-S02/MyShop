import React from 'react';
import './Admin.scss';

const Sidebar = ({ setPage }) => {
  return (
    <div className="sidebar">
      <h2>Admin</h2>
      <ul>
        <li onClick={() => setPage('dashboard')}>Dashboard</li>
        <li onClick={() => setPage('products')}>Products</li>
        <li onClick={() => setPage('users')}>Users</li>
        <li onClick={() => setPage('settings')}>Settings</li>
        <li onClick={()=>setPage('add')}>Add</li>
      </ul>
    </div>
  );
};

export default Sidebar;
