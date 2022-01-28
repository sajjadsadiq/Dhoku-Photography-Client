import React from 'react';
import './Navbar.css';
import Logo from './../../../../images/Dhokh.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light text-white">
        <Link to="/">
          <img className="navbarLogo" src={Logo} alt="" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mt-3 ml-auto">
            <li class="nav-item active">
              <Link to="/" class="nav-link mr-2" href="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link mr-2">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="service" class="nav-link mr-2">
                Service
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/reviews" class="nav-link mr-2">
                Reviews
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/dashboard" class="nav-link mr-2">
                Admin
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link mr-2">
                Contact
              </Link>
            </li>
            <li>
              <button
                href="/login"
                className="loginBtn btn btn-primary custom-btn ml-5 pr-4"
              >
                <a href="/login">Login</a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
