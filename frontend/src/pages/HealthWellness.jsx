import React from 'react';

const exercises = [
  { title: 'Tai Chi Chuan', img: 'https://chenstyletaichi.org/wp-content/uploads/2022/04/TaiChi-2.jpg' },
  { title: 'Health Chi Gong', img: 'https://chenstyletaichi.org/wp-content/uploads/2023/07/IMG_6751.jpg' },
  { title: 'Chair Exercise', img: 'https://via.placeholder.com/600x400' },
  { title: 'Chair Yoga', img: 'https://via.placeholder.com/600x400' },
  { title: 'Ballroom Dancing', img: 'https://via.placeholder.com/600x400' }
];

export default function HealthWellness() {
  return (
    <section className="section container">
      <h2 className="section-title">Health & Wellness</h2>
      <div className="cards-grid">
        {exercises.map((ex, i) => (
          <div key={i} className="card">
            <div className="card-image">
              <img src={ex.img} alt={ex.title} />
            </div>
            <h3>{ex.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
