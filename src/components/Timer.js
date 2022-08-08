import React, {useEffect} from "react";

function Timer({time, timeSetter}){
    
    useEffect(()=>{
        function updateTime(){
            const updatedTime = time - 1;
            timeSetter(updatedTime);
        }
        const gameTimer = setInterval(updateTime, 1000);

        return function cleanup(){
            clearInterval(gameTimer);
        }
    })

    return(
        <h4>Time Remaining: {time}</h4>
    )
}

export default Timer;