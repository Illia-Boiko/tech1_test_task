import React from 'react';
import './Profile.scss';

export const Profile: React.FC = () => {
  return (
    <div className="Profile Header__Profile">
      <a href="/" className="Profile__link">
        <img
          className="Profile__image"
          src="icon-user.png"
          alt="icon"
        />
      </a>
      <button
        className="Profile__button"
        type="button"
      >
        Logout
        <img
          className="Profile__logout-image"
          src="logout.png"
          alt="logout"
        />
      </button>
    </div>
  );
};
