import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

import Home from './pages/Home/Home';

import Shop from './pages/Shop/Shop';
import Profile from './pages/profile/Profile';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';


import Sidebar from './pages/Admin/Sidebar';
import DashboardHome from './pages/Admin/DashboardHome';
import Products from './pages/Admin/Products';
import Users from './pages/Admin/Users';

import './pages/Admin/Admin.scss';

const AdminLayout = ({ children, setPage }) => (
  <div className="admin-dashboard">
    <Sidebar setPage={setPage} />
    <div className="main-content">{children}</div>
  </div>
);

const App = () => {
  const [adminPage, setAdminPage] = useState('dashboard');

  return (
    <Router>
      {/* Website UI */}
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* Admin Panel Routes */}
        <Route
          path="/admin"
          element={
            <AdminLayout setPage={setAdminPage}>
              {adminPage === 'dashboard' && <DashboardHome />}
              {adminPage === 'products' && <Products />}
              {adminPage === 'users' && <Users />}
              {adminPage === 'settings' && <p className="content">Settings coming soon...</p>}
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
