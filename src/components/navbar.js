import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';
import { IoIosPerson } from 'react-icons/io';

const Navbar = () => (
  <nav className="navbar d-flex bg-white">
    <div>
      <a href="/" className="NavLogo font-normal montserrat-font">Bookstore CMS</a>
      <NavLink to="/" className="nav-link font-normal montserrat-font" activeClassName="active-link" exact>Books</NavLink>
      <NavLink to="/categories" className="nav-link font-normal montserrat-font" activeClassName="active-link" exact>Categories</NavLink>
    </div>
    <IoIosPerson className="icon" />
  </nav>
);

export default Navbar;
