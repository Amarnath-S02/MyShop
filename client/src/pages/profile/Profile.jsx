import React, { useState } from 'react';

import './Profile.scss';



const Profile = () => {
  const[userData,setUserData]=useState({
    name:'Amar',
    Phone:'12345',
    email:'skamar003@gmail.com',
    address:'123,chennai'
  })

  const[isEditing,setEditing]=useState(false);
  
  const handleChange = (e)=>{
     const {name,value}=e.target;
     setUserData({...userData,[name]:value})
  };
  const handleEdit = () => {
    setEditing(!isEditing);
  };


  return (
    <div className="profile-container">
       <h2>My Profile</h2>
      <div className="profile-image">
           <img src="/assets/user.png" alt="user" />
      </div>
   

      <div className="profile-form">
        <div className="name">
          <label> name:
          <input type="text" 
          name='name' 
          value={userData.name}
          onChange={handleChange}
          disabled={!isEditing} />
          </label>
        </div>
        <div className="phone">
          <label htmlFor="
          ">
            Phone:
            <input type="number" name='phone' 
             value={userData.Phone}onChange={handleChange} disabled={!isEditing} />
          </label>
        </div>
          <div className="email">
            <label>
              Email:
              <input type="email" name='email'  value={userData.email} onChange={handleChange} disabled={!isEditing} />
            </label>
          </div>

          <div className="address">
            <label>
              Address:
              <input type="text" name='address'  value={userData.address} onChange={handleChange} disabled={!isEditing}/>
            </label>
          </div>
          <button onClick={handleEdit}>
            {isEditing ? 'Save' :'Edit'}
          </button>
      </div>
    </div>
  )
}

export default Profile