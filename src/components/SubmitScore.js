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
    
    return(     
        <form onSubmit={e => console.log(e.target.value)}>
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