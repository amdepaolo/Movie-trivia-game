import React from "react";

function SubmitScore({score}){
    function handleSubmit(e){
        e.preventDefault();
        const scoreObject = {
            name: e.target.name.value,
            message: e.target.message.value,
            score: score
        };
        fetch('http://localhost:4000/players', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(scoreObject)
          })
          .then(r => r.json())
          .then(r => console.log(r))
    }

    return(
        <div>
            <h3>Submit Your Score?</h3>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type='text'name="name"></input>
                <label>Message:</label>
                <input type='text' name="message"></input>
                <p>Final Score: {score}</p>
                <input type='submit'>Add Score</input>
            </form>
        </div>
    )
}

export default SubmitScore;