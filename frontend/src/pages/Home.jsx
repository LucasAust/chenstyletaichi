import React from 'react';

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <img
          src="https://chenstyletaichi.org/wp-content/uploads/2023/07/IMG_4582-scaled.jpg"
          alt="Shifu Kevin Chen and Grandmaster in NYC"
        />
        <div className="hero-text">
          <h2>Instruction and Practice in the Traditional Chen Style</h2>
          <p>
            Traditionally, tai chi is practiced as a martial art but has expanded into
            health and performance domains, preserving its martial efficacy.
          </p>
          <a href="mailto:KevinChenBlog@gmail.com" className="btn">Contact Us</a>
        </div>
      </div>
      <div className="features">
        <div className="feature">
          <h3>Traditional Form</h3>
          <p>Practice Old Frame forms 1 &amp; 2 and weapons training with certified Grandmasters.</p>
        </div>
        <div className="feature">
          <h3>Health Chi Gong</h3>
          <p>Cultivate internal energy through Chi Kung exercises and standing meditation.</p>
        </div>
        <div className="feature">
          <h3>Community &amp; Lineage</h3>
          <p>Train under Shifu Kevin Chen, who studied directly at Chen Village’s Grandmasters.</p>
        </div>
      </div>
    </section>
  );
}
