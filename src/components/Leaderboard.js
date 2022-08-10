import React, {useEffect, useState} from "react";

function Leaderboard(){
    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/players')
        .then(r => r.json())
        .then(setPlayers)
      }, []);

    return(
        <table>
            <tr>
                <thead>Rank</thead>
                <thead>Name</thead>
                <thead>Message</thead>
                <thead>Score</thead>
            </tr>

        </table>
    )
}

export default Leaderboard;