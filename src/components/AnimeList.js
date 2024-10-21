import React from 'react';

const AnimeList = () => {
  const animes = [
    { id: 1, title: 'Naruto' },
    { id: 2, title: 'One Piece' },
    { id: 3, title: 'Attack on Titan' }
  ];

  return (
    <div>
      <h1>Anime List</h1>
      <ul>
        {animes.map((anime) => (
          <li key={anime.id}>{anime.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeList;
