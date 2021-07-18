import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routs from '../../route/routs';
import {toggleModalOperation} from '../../redux/operations';


const { home, contact, about, } = routs;

const Header = ({ toggleModal }) => {
  
  
  // const openModal = () => toggleModal();
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
          <button onClick={toggleModal}>login</button>
        </li>
        <li>
          <button>register</button>
        </li>
      </ul>
    </header>
  );
};

const mapDispatchToProps = {toggleModal: toggleModalOperation,
  
};

export default connect(null, mapDispatchToProps)(Header);
