import React from 'react';

const events = [
  { title: 'Red Carpet Photography', img: 'https://chenstyletaichi.org/wp-content/uploads/2023/07/IMG_4582-scaled.jpg' },
  { title: 'Wedding Photography', img: 'https://chenstyletaichi.org/wp-content/uploads/2022/04/TaiChi-2.jpg' },
  { title: 'Photobooth', img: 'https://chenstyletaichi.org/wp-content/uploads/2023/07/IMG_6751.jpg' },
  { title: 'Audio Setup', img: 'https://chenstyletaichi.org/wp-content/uploads/2023/07/IMG_4582-scaled.jpg' }
];

export default function Events() {
  return (
    <section className="events">
      <h2>Events Services</h2>
      {events.map((ev, idx) => (
        <div key={idx} className="event">
          <h3>{ev.title}</h3>
          <img src={ev.img} alt={ev.title} />
        </div>
      ))}
    </section>
  );
}
