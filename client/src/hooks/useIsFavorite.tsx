import { useState, useEffect } from 'react';

const useIsFavorite = (id: number) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoritedIds = JSON.parse(localStorage.getItem('favorited')!) || [];
    setIsFavorite(favoritedIds.includes(id));
  }, [id]);

  return isFavorite;
};

export default useIsFavorite;
