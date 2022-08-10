import React, {useEffect, useState} from "react";
import LeaderboardRow from "./LeaderboardRow";

function Leaderboard(){
    const [players, setPlayers] = useState([]);
    const tableContents = topTen.map(obj => <LeaderboardRow obj={obj}/>); 

    useEffect(()=>{
        fetch('http://localhost:4000/players')
        .then(r => r.json())
        .then(setPlayers)
      }, []);

    console.log(players)

    function sortScores(arr){
        const sortedScores = []
        for (let i = 0; i < 10; i++){
            let highestScore = {score:0}
            let highestIndex = i
            for(let i = 0; i < arr.length; i++){
                if(arr[i].score > highestScore.score){
                    highestScore = arr[i];
                    highestIndex = i;
                }
            }
            sortedScores.push(highestScore);
            arr.splice(highestIndex, 1)      
        }
        return sortedScores;
    };

    const topTen = sortScores(players);


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
                {tableContents}
            </tbody>
        </table>
    )
}

export default Leaderboard;