// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>&copy; {new Date().getFullYear()} Chen Style Tai Chi Chuan. All rights reserved.</p>
      </div>
    </footer>
  );
}