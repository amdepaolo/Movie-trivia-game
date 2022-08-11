import React from "react";

function LeaderboardRow({obj}){
    const {name, message, score, rank} = obj;

    return(
        <tr>
            <td>{rank}</td>
            <td>{name}</td>
            <td>{message}</td>
            <td>{score}</td>
        </tr>
    )
}

export default LeaderboardRow;