import React from 'react';
import { NavLink } from 'react-router-dom';
import routs from '../../route/routs';

const { home, contact, about } = routs;
const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to={home}>home</NavLink>
        </li>
        <li>
          <NavLink to={contact}>contact</NavLink>
        </li>
        <li>
          <NavLink to={about}>about</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <button>login</button>
        </li>
        <li>
          <button>register</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
