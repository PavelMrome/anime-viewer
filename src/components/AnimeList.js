import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AnimeList.css';

const AnimeList = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch('https://api.anilibria.tv/v3/title/updates?limit=10')
      .then(response => response.json())
      .then(data => {
        Set.AnimeList(data.list); // допустим, у тебя есть setAnimeList для установки состояния
      })
      .catch(error => console.error('Ошибка:', error));
  }, []);
  return (
    <div className="anime-list">
      <h1>Anime List</h1>
      <div className="anime-grid">
      {AnimeList.map(anime => (
  <div key={anime.id}>
    <h2>{anime.names.ru}</h2>
    <img src={`https://api.anilibria.tv${anime.posters.medium.url}`} alt={anime.names.ru} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
