import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">chenstyletaichi</h1>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/health">Health & Wellness</NavLink></li>
        <li><NavLink to="/events">Events</NavLink></li>
      </ul>
    </nav>
  );
}