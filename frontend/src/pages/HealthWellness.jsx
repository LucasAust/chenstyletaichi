import React from 'react';

const exercises = [
  {
    title: 'Tai Chi Chuan',
    img: 'https://chenstyletaichi.org/wp-content/uploads/2022/04/TaiChi-2.jpg',
    description: 'Traditional Chen style form taught by certified instructors.',
    video: ''
  },
  {
    title: 'Health Chi Gong',
    img: 'https://chenstyletaichi.org/wp-content/uploads/2023/07/IMG_6751.jpg',
    description: 'Breathing and energy practices to cultivate internal qi.',
    video: ''
  },
  { title: 'Chair Exercise', img: '/placeholder-chair-ex.jpg', description: '', video: '' },
  { title: 'Chair Yoga', img: '/placeholder-chair-yoga.jpg', description: '', video: '' },
  { title: 'Ballroom Dancing', img: '/placeholder-ballroom.jpg', description: '', video: '' }
];

export default function HealthWellness() {
  return (
    <section className="health-wellness">
      <h2>Health & Wellness Exercises</h2>
      {exercises.map((ex, idx) => (
        <div key={idx} className="exercise">
          <h3>{ex.title}</h3>
          <img src={ex.img} alt={ex.title} />
          {ex.description && <p>{ex.description}</p>}
          {ex.video && (
            <div className="video">
              <iframe
                width="560"
                height="315"
                src={ex.video}
                title={ex.title}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}