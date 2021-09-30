import React from 'react';
import './Nav.scss';

export const Nav: React.FC = () => {
  return (
    <nav className="Nav Header__nav">
      <ul className="Nav__list">
        <li className="Nav__item Nav__item--active">
          <a href="/dashboard" className="Nav__link">
            Dashboard
          </a>
        </li>
        <li className="Nav__item">
          <a href="/instances" className="Nav__link">
            Instances
          </a>
        </li>
        <li className="Nav__item">
          <a href="/pairs" className="Nav__link">
            Pairs
          </a>
        </li>
        <li className="Nav__item">
          <a href="/about" className="Nav__link">
            About
          </a>
        </li>
        <li className="Nav__item">
          <a href="/help" className="Nav__link">
            Help
          </a>
        </li>
        <li className="Nav__item">
          <a href="/contact" className="Nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
