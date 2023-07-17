import PlayerForm from "../components/PlayerForm"


function Pagethree() {
  function addPlayerHandler(playerData) {
    fetch(
      'https://react-sase-udemy-default-rtdb.europe-west1.firebasedatabase.app/player.json', 
      {
          method: 'POST', 
          body: JSON.stringify(playerData),
          headers: {
          'Content-Type': 'application/json'
          }
      }
    );
  }
  return (
    <>
      <div className="players">
        <PlayerForm onAddPlayer={addPlayerHandler} />
      </div>
    </>
  );
}

export default Pagethree