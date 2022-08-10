import React from "react";

function LeaderboardRow({obj}){
    const {name, message, score} = obj;

    return(
        <tr>
            <td></td>
            <td>{name}</td>
            <td>{message}</td>
            <td>{score}</td>
        </tr>
    )
}

export default LeaderboardRow;