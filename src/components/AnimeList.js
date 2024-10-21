import React, { useEffect, useState } from 'react';
import './AnimeList.css';

const AnimeList = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await fetch('https://anilibria.tv/api/anime');
        const data = await response.json();
        setAnimes(data.data); // Предполагая, что ответ содержит массив в поле data
      } catch (error) {
        console.error("Error fetching animes:", error);
      }
    };

    fetchAnimes();
  }, []);

  return (
    <div className="anime-list">
      <h1>Anime List</h1>
      <div className="anime-grid">
        {animes.map((anime) => (
          <div className="anime-card" key={anime.id}>
            <img src={anime.image} alt={anime.title} /> {/* Измени на правильное поле для изображения */}
            <h3>{anime.title}</h3>
            <p>Rating: {anime.rating}</p> {/* Измени на правильное поле для рейтинга */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
