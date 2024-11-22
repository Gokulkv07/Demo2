import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Firstpage</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/pgdetails">PGDetails</Link>
        </li>
        <li>
          <Link to="/booking">BookingPage</Link>
        </li>
        <li>
          <Link to="/payment">PaymentPage</Link>
        </li>
        <li>
          <Link to="/review" >ReviewPage</Link>
        </li>
        <li>
          <Link to="/lastpage" >LastPage</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
