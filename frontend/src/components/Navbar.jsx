// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="logo">ChenStyleTaiChi</div>
        <nav>
          <ul className="nav-links">
            {['/', '/about', '/health', '/events'].map((path, idx) => {
              const labels = ['Home', 'About Us', 'Wellness', 'Events'];
              return (
                <li key={idx}>
                  <NavLink to={path} className={({ isActive }) => isActive ? 'active' : ''} end>
                    {labels[idx]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
