import React from 'react';
import PlayerImage from '../public/player.png'

const BASE_IMAGE_URL = "https://cdn.nba.com/headshots/nba/latest/1040x760/"

export default function PlayerCard (props) { 
    return (
        <div className="playercard">
            <p></p>
            <img src={BASE_IMAGE_URL + props.player.playerId + ".png"} />
            <p>{props.player.firstName + " " + props.player.lastName}</p>
            <button onClick={props.reloadFunction}>Vote</button>
        </div>
    )
}
