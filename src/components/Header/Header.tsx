import React from 'react';
import { Nav } from '../Nav/Nav';
import { Profile } from '../Profile/Profile';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="Header App__Header">
      <Nav />
      <Profile />
    </header>
  );
};
