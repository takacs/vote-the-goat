import React, { useState } from 'react';
import PlayerCard from './PlayerCard.js'
import playerData from '../data/players.json'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = { matchup: this.getMatchup() };

        this.getMatchup = this.getMatchup.bind(this);
        this.getNewMatchup = this.getNewMatchup.bind(this);
    }

    getMatchup() {
        const jsonData = playerData;
        let randomPlayerOneIdx = Math.floor(Math.random() * jsonData.length);
        let randomPlayerTwoIdx = Math.floor(Math.random() * jsonData.length);
        if (randomPlayerOneIdx == randomPlayerTwoIdx) return this.getMatchup();
        return [jsonData[randomPlayerOneIdx], jsonData[randomPlayerTwoIdx]]
    }

    getNewMatchup() {
        console.log("get new matchup")
        this.setState({ matchup: this.getMatchup() })
    }
    
    render() {
        return (
            <div className="game">
                <PlayerCard player={this.state.matchup[0]} reloadFunction={this.getNewMatchup} />
                <PlayerCard player={this.state.matchup[1]} reloadFunction={this.getNewMatchup}  />
            </div>
        )
    }
}

export default Game;