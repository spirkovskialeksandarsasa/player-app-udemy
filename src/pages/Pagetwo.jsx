import PlayerList from "../components/PlayerList";
import "./Pagetwo.css";
import { useState, useEffect } from "react";

function Pagetwo() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPlayers, setLoadedPlayers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-sase-udemy-default-rtdb.europe-west1.firebasedatabase.app/player.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const players = [];

        for (const key in data) {
          const player = {
            id: key,
            ...data[key],
          };

          players.push(player);
        }
        setIsLoading(false);
        setLoadedPlayers(players);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="players">
        <PlayerList player={loadedPlayers} />
      </div>
    </>
  );
}

export default Pagetwo;
