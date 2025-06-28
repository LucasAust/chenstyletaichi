// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <header className="navbar">
      <div className="container nav-container">
          <div className="logo">ChenStyleTaiChi</div>
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            type="button"
          >
              <span></span>
              <span></span>
              <span></span>
          </button>        
        <nav>
          <ul className={`nav-links${menuOpen ? " open" : ""}`}>
            {['/', '/about', '/health', '/events'].map((path, idx) => {
              const labels = ['Home', 'About Us', 'Wellness', 'Events'];
              return (
                <li key={idx}>
                  <NavLink to={path} className={({ isActive }) => isActive ? 'active' : ''} end
                    onClick={() => setMenuOpen(false)}
                    >
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
