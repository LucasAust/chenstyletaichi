import React from 'react';

export default function Home() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-image">
          <img src="https://chenstyletaichi.org/wp-content/uploads/2023/07/IMG_4582-scaled.jpg" alt="Chen Style Tai Chi" />
        </div>
        <div className="hero-text">
          <h1>Traditional Chen Style Tai Chi</h1>
          <p>Experience the perfect blend of martial art, meditation, and health.</p>
          <a href="mailto:KevinChenBlog@gmail.com" className="btn-primary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}