import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AnimeList.css';

const AnimeList = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await axios.get('/api/anime');

        setAnimes(response.data.data); // Предполагая, что ответ содержит массив в поле data
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
            <img src={anime.image} alt={anime.title} />
            <h3>{anime.title}</h3>
            <p>Rating: {anime.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
