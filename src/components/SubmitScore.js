import React, {useState} from "react";

function SubmitScore({score}){
    const [scoreObject, setScoreObject] = useState({score: score, name: '', message: ''})

    function updateScoreObject(key, value){
        if (key === 'name'){
            const updatedScoreObject = {...scoreObject, name: value};
            setScoreObject(updatedScoreObject);
            console.log(scoreObject);
        }
        else {
            const updatedScoreObject = {...scoreObject, message: value};
            setScoreObject(updatedScoreObject);
            console.log(scoreObject);
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch('http://localhost:4000/players', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(scoreObject)
          })
          .then(r => r.json())
          .then(()=> window.location.href='http://localhost:3000/leaderboard')
    }
    
    return(     
        <form onSubmit={handleSubmit}>
            <h4>Submit your score?</h4>
            <input
                value={scoreObject.name}
                onChange={e => updateScoreObject('name', e.target.value)} 
                type='text'
                placeholder="Name"
            />
            <input 
                value={scoreObject.message} 
                onChange={e => updateScoreObject('message', e.target.value)} 
                type='text'
                placeholder="Message"
            />
            <input type='submit' value='Submit Score'/>
        </form>
    )
};

export default SubmitScore;