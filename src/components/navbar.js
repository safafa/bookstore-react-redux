import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <a href="/" className="NavLogo">Bookstore CMS</a>
    <NavLink to="/" className="nav-link" activeClassName="active-link" exact>Books</NavLink>
    <NavLink to="/categories" className="nav-link" activeClassName="active-link" exact>Categories</NavLink>
  </nav>
);

export default Navbar;
