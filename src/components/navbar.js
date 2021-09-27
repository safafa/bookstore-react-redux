import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <span>
      <a href="/" className="NavLogo">Bookstore</a>
    </span>
    <ul>
      <li>
        <NavLink to="/" className="nav-link" activeClassName="active-link" exact>Books</NavLink>
      </li>
      <li>
        <NavLink to="/categories" className="nav-link" activeClassName="active-link" exact>Categories</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
