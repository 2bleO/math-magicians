import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="Header">
    <h1>Math Magicians</h1>
    <ul className="menu">
      <li>
        <NavLink exact to="/">Home</NavLink>
      </li>
      <li>
        <NavLink exact to="/calculator">Calculator</NavLink>
      </li>
      <li>
        <NavLink exact to="/quote">Quote</NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
