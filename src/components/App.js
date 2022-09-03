import {useEffect, useState} from "react";
import {Route, Link} from "react-router-dom";
import Game from "./Game";
// import NewQuestionForm from "./NewQuestionForm";
import Leaderboard from "./Leaderboard";
import NavBar from "./NavBar";


function App() {
  const [questions, setQuestions] = useState([]);

  function randomizer(array){
    const randomizedArray = [array[0], array[1]];
    for(let i = 2; i < array.length; i++){
      randomizedArray.splice(Math.round(Math.random()*1000)%randomizedArray.length, 0, array[i]);
      randomizedArray.reverse();
    }
    console.log(randomizedArray)
    return randomizedArray
  };

  function randomizeAndSetQs(){
    const randomizedQs = randomizer(questions);
    setQuestions(randomizedQs)
  };

  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then(randomizer)
    .then(setQuestions)
  }, []);

  return (
    <div>
      <NavBar onGameClick={randomizeAndSetQs} />
      <h1> Movie Trivia Game </h1>
      <Route exact path='/'>
        <h2>Test Your Knowledge!</h2>
        <p>Welcome to the game! You will get a number of multiple choice trivia questions covering a variety of movies. You get 30 seconds to answer each question. The quicker you answer, the more points you get! The highest scores will make it onto the leaderboard. Whenver your ready, hit the start button below. Good Luck!</p>
        <Link to='/game'><button onClick={randomizeAndSetQs}>START</button></Link>
      </Route>
      <Route path='/game'>
        <Game questions={questions} onRestartClick={randomizeAndSetQs}  />
      </Route>
      <Route path='/leaderboard'>
        <h2>Hall of Fame</h2>
        <Leaderboard />
        <Link to='/'><button>HOME</button></Link>
      </Route>
      {/* <Route path='/edit'>
        <NewQuestionForm />
      </Route> */}
    </div>
  )
}

export default App;
