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

    const urgency = time < 10? {color:'red'} : {color:'black'};

    return(
        <h4 style={urgency}>Time Remaining: {time}</h4>
    )
}

export default Timer;