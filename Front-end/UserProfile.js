import React from 'react';
import './UserProfile.css'; // Import the CSS file

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <h2>{user.username}'s Profile</h2>
      <div className="profile-info">
        {/* Display user information, profile picture, and other details */}
      </div>
    </div>
  );
}

export default UserProfile;
