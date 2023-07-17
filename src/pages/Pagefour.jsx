/* eslint-disable no-unused-vars */
import  { useContext } from 'react'

import FavoriteContext from '../store/favorites-context'
import PlayerList from '../components/PlayerList'


function Pagefour() {
    const favoritesCtx = useContext(FavoriteContext);
  return (
<div>
    <h1>Your Favorite Players</h1>
    <PlayerList player={favoritesCtx.favorites}/>
    </div>
  )
}

export default Pagefour