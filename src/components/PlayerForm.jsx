/* eslint-disable react/prop-types */
import './PlayerForm.css'
import { useRef } from 'react';

function PlayerForm(props) {

    const nameInputRef = useRef();
    const imageInputRef = useRef();

function submitHandler(event){
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;

    const playerData = {
        name: enteredName,
        image: enteredImage
    };

    props.onAddPlayer(playerData)
}

  return (
    <div className="form">
        <form onSubmit={submitHandler}>
            <label htmlFor="playerName">
                Enter player name 
                &nbsp;
            </label>
            <input type="text" id="playerName"  placeholder="lionel pessi" ref ={nameInputRef}/>
            <label htmlFor="playerImage">
                Enter link of player image
                &nbsp;
            </label>
            <input type="url" id="playerImage" ref={imageInputRef}/>

            <button type="submit">
                Add player
            </button>
        </form>
    </div>
  )
}

export default PlayerForm