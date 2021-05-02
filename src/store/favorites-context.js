import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMemo) => {},
  removeFavorite: (memoId) => {},
  itemIsFavorite: (memoId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMemo) {
    setUserFavorites((pevUserFavorites) => {
      return pevUserFavorites.concat(favoriteMemo);
    });
  }
  function removeFavoriteHandler(memoId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((memo) => memo.id !== memoId);
    });
  }

  function itemIsFavoriteHandler(memoId) {
    return userFavorites.some((memo) => memo.id === memoId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
