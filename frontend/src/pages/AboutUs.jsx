import React from 'react';

export default function AboutUs() {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>
        The art of T’ai Chi Ch’uan traces its roots back to the 16th or 17th century,
        born as a method for physical defense during times of unrest. It blends Taoist
        health and spiritual practices with Shaolin fighting skills. Chen Wanting,
        one of the first originators, taught his villagers in Chen Village, where the
        lineage remains intact today.
      </p>
      <p>
        From this original form emerged other styles such as Yang, Wu, and Sun.
        Our academy preserves the traditional Chen style, including Chi Kung exercises,
        standing mediation, Old Frame Forms 1 &amp; 2, and weapons training. Our Shifu,
        Kevin Chen, trained personally at Chen Village under current Grandmasters.
      </p>
      <h3>Our Mission</h3>
      <p>
        Build the best product that creates the most value for our customers, using
        business to inspire and implement environmentally friendly solutions.
      </p>
      <h3>Our Values</h3>
      <ul>
        <li>Go above and beyond for our clients.</li>
        <li>Deliver our very best work every single day.</li>
      </ul>
      <div className="contact-info">
        <p>
          <strong>Contact:</strong> KevinChenBlog@gmail.com | (973) 908-8863
        </p>
        <p>
          <strong>Location:</strong> Queens, NY 11354
        </p>
        <div className="social">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
    </section>
  );
}