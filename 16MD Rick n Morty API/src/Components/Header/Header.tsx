import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const getActiveLinkClassName = (isActive : boolean) => (isActive ? 'link link--active' : 'link');

const Header = () => (
  <header>
    <nav className="navigation">
      <NavLink
        className={({ isActive }) => getActiveLinkClassName(isActive)}
        to="/"
      >
        Characters
      </NavLink>
      <NavLink
        className={({ isActive }) => getActiveLinkClassName(isActive)}
        to="/episodes"
      >
        Episodes
      </NavLink>
      <NavLink
        className={({ isActive }) => getActiveLinkClassName(isActive)}
        to="/locations"
      >
        Locations
      </NavLink>
    </nav>

  </header>

);

export default Header;
