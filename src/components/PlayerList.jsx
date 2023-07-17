/* eslint-disable react/prop-types */

import Player from './Player'

function PlayerList(props) {
  return (
    <div>
       {
       props.player.map((player) => <Player
        key={player.id} 
       name={player.name}
       image = {player.image}
       />
       )}
    </div>
  )
}

export default PlayerList