import { createContext, useState, useContext, useEffect } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    // Load favorites from localStorage on initial render
    const savedFavorites = localStorage.getItem('cityFavorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cityFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (city) => {
    setFavorites((prev) => {
      if (prev.some(fav => fav.id === city.id)) {
        return prev;
      }
      return [...prev, city];
    });
  };

  const removeFromFavorites = (cityId) => {
    setFavorites((prev) => prev.filter(city => city.id !== cityId));
  };

  const isFavorite = (cityId) => {
    return favorites.some(city => city.id === cityId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}