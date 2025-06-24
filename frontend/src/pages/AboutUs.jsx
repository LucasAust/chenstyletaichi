import React from 'react';

export default function AboutUs() {
  return (
    <section className="about-section container">
      <h2 className="section-title">About Us</h2>
      <div className="about-grid">
        <div className="about-image">
          <img src="https://chenstyletaichi.org/wp-content/uploads/2023/07/IMG_6751.jpg" alt="Tai Chi Practice" />
        </div>
        <div className="about-text">
          <p>The art of Tai Chi Chuan originated in the 16th-17th century in Chen Village, merging Taoist health practices with martial techniques.</p>
          <p>Our academy preserves the original Chen style: Old Frame Forms, Chi Kung, and weapons training. Shifu Kevin Chen studied personally under Chen Village Grandmasters.</p>
          <h3>Mission</h3>
          <p>To provide authentic Tai Chi instruction for health, balance, and community empowerment.</p>
          <h3>Values</h3>
          <ul>
            <li>Excellence in teaching</li>
            <li>Respect for tradition</li>
            <li>Commitment to student growth</li>
          </ul>
        </div>
      </div>
    </section>
  );
}