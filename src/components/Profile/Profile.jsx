import React, { useEffect, useState } from "react";
import { verifyUser } from "../../data/users";
import './Profile.css';

function Profile({ username, password }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = verifyUser(username, password);
    if (user) {
      setUserData(user);
    } else {
      console.error("User not found or password incorrect");
    }
  }, [username, password]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile">
      <h1 className="profile__header">User Profile</h1>
      <div className="profile__avatar-container">
        <img src={userData.avatar} alt="Profile" className="profile__avatar" />
      </div>
      
      <div className="profile__info">
        <div className="profile__form-group">
          <label>First Name</label>
          <input type="text" value={userData.firstName} readOnly />
        </div>
        <div className="profile__form-group">
          <label>Last Name</label>
          <input type="text" value={userData.lastName} readOnly />
        </div>
        <div className="profile__form-group">
          <label>Email</label>
          <input type="text" value={userData.email} readOnly />
        </div>
        <div className="profile__form-group">
          <label>Department</label>
          <input type="text" value={userData.department} readOnly />
        </div>
        <div className="profile__form-group">
          <label>Position</label>
          <input type="text" value={userData.position} readOnly />
        </div>
      </div>
    </div>
  );
}

export default Profile;
