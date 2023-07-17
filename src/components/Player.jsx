/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import FavoriteContext, {
  FavoritesContextProvider,
} from "../store/favorites-context";
import { useContext } from "react";

function Player(props) {
  const favoriteCtx = useContext(FavoriteContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);


  function toggleFavHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        name: props.name,
        image: props.image,
      });
    }
  }
  return (
    <div>
      <name>{props.name}</name>
      <img src={props.image} />
      <div className="button">
      <button onClick={toggleFavHandler}>
        {itemIsFavorite ? "Remove from Favorites!" : "Add to Favorite"}
      </button>
      </div>
    </div>
  );
}

export default Player;
