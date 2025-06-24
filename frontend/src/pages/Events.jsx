import React from 'react';

const events = [
  { title: 'Red Carpet Photography', img: 'https://via.placeholder.com/600x400' },
  { title: 'Wedding Photography', img: 'https://via.placeholder.com/600x400' },
  { title: 'Photobooth', img: 'https://via.placeholder.com/600x400' },
  { title: 'Audio Setup', img: 'https://via.placeholder.com/600x400' }
];

export default function Events() {
  return (
    <section className="section container">
      <h2 className="section-title">Events Services</h2>
      <div className="cards-grid">
        {events.map((ev, i) => (
          <div key={i} className="card">
            <div className="card-image">
              <img src={ev.img} alt={ev.title} />
            </div>
            <h3>{ev.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}