import React, {useEffect, useState} from "react";
import LeaderboardRow from "./LeaderboardRow";

const placeholderObj = [{
    score: 0,
    name: "Loading",
    message: "Loading",
    id: 1
  }];

function Leaderboard(){
    const [players, setPlayers] = useState(placeholderObj);
    const tableContents = players.map(obj => <LeaderboardRow obj={obj} key={obj.id}/>); 

    useEffect(()=>{
        fetch('http://localhost:4000/players')
        .then(r => r.json())
        .then(sortScores)
      }, []);

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
            sortedScores.push({...highestScore, rank: i+1});
            arr.splice(highestIndex, 1)      
        }
        setPlayers(sortedScores);
    };

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