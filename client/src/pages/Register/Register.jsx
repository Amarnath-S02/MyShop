import React, { useState } from 'react';
import newRequest from '../../utils/newRequest';
import "./Register.scss";

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };
 console.log("Sending to backend:", userData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await newRequest.post("/register", userData);
      console.log("User registered:", user);
      alert("Registration successful!");
    } catch (error) {
      console.error("Registration error:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className='register-container'>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit} className='form'>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="submit">Create</button>
      </form>
    </div>
  );
};

export default Register;
