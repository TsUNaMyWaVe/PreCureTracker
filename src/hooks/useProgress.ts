import { useState, useEffect } from 'react';

export const useProgress = () => {
  const [watched, setWatched] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('precure-progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('precure-progress', JSON.stringify(watched));
  }, [watched]);

  const toggleWatched = (id: string) => {
    setWatched(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getSeasonProgress = (seasonId: string, episodesCount: number, moviesCount: number) => {
    let watchedCount = 0;
    for (let i = 1; i <= episodesCount; i++) {
      if (watched[`${seasonId}-ep-${i}`]) watchedCount++;
    }
    // We'd need movie IDs here, but for simplicity in this helper:
    return watchedCount;
  };

  return { watched, toggleWatched, getSeasonProgress };
};