import React from "react";

function Timer({time, timeSetter}){

    setTimeout(()=>{
            const newTime = time-1;
            timeSetter(newTime)
        }, 1000)

    return(
        <h4>Time Remaining: {time}</h4>
    )
}

export default Timer;