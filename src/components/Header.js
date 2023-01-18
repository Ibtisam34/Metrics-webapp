import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone, FaSearch } from 'react-icons/fa';
import { ImSun } from "react-icons/im";
import { ImReply } from "react-icons/im";
import './Header.css'
const Navbar = () => (
  <header className="navbar-header-padding">
    <nav>
      <ul>
        <li className="navbar-links-mobile">
          <NavLink exact="true" to="/">
            <ImReply className="navbar-back-icon-mobile" />
          </NavLink>
          <NavLink exact="true" to="/" className="navbar-link-mobile">
            Home
          </NavLink>
        </li>
        <li className="navbar-icons-mobile">
          <FaSearch className="navbar-search-bar-mobile" />
          <FaMicrophone className="navbar-microphone-mobile" />
          <ImSun className="navbar-settings-mobile" />
        </li>
      </ul>
    </nav>
  </header>
);
export default Navbar;