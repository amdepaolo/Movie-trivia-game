import React, {useEffect, useState} from "react";

function Leaderboard(){
    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/players')
        .then(r => r.json())
        .then(setPlayers)
      }, []);

    console.log(players)

    return(
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Message</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>A</td>
                    <td>Hello World</td>
                    <td>a billion</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Leaderboard;