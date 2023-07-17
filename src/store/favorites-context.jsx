/* eslint-disable react/prop-types */

import { createContext, useState } from "react";
const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoritePlayer) => {},
  removeFavorite: (playerId) => {},
  itemIsFavorite: (playerId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoritePlayer) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoritePlayer);
    });
  }

  function removeFavoriteHandler(playerId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(player => player.id !== playerId);
    });
  }

  function itemIsFavoriteHandler(playerId) {
    //helper funkcija
    return userFavorites.some(player => player.id === playerId);
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
