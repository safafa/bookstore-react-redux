import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <span>
      <a href="/" className="NavLogo">Math Magicians</a>
    </span>
    <ul>
      <li>
        <NavLink to="/" className="nav-link" activeClassName="active-link" exact>Home</NavLink>
      </li>
      <li>
        <NavLink to="/calculator" className="nav-link" activeClassName="active-link" exact>Calculator</NavLink>
      </li>
      <li>
        <NavLink to="/quote" className="nav-link" activeClassName="active-link" exact>Quote</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
