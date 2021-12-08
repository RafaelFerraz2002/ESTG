import Player from "./Player";
import './Players.css';
import Config from '../config'
import React, { useState, useEffect } from 'react';

const Players = () => {
    const [loading, setLoading] = useState(true);
    const [players, setPlayers] = useState([]);


    useEffect(() => {
        fetch('http://127.0.0.1:3000/team/players', {
            headers: { 'Accept': 'application/json', 'x-access-token': Config.token }
        })
        .then((response) => response.json())
        .then((response) => {
            setLoading(false);
            setPlayers(response)
        });
        return ()=>setPlayers([]);
    }, [])

    if (loading){
        return <h1>LOADING</h1>
    }
    
    return (
        <div className="players">
           <label>PLAYEAR: </label>
           <ul>
               {
                   players.map((player)=> <Player key={player._id}{...player} />)
               }
           </ul>
        </div>
    )
}

export default Players;