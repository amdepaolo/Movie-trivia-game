import {useEffect, useState} from "react";
import {Route, Link} from "react-router-dom";
import Game from "./Game";
import NewQuestionForm from "./NewQuestionForm";
import Leaderboard from "./Leaderboard";
import NavBar from "./NavBar";


function App() {
  const [questions, setQuestions] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then(setQuestions)
  }, []);

  return (
    <div>
      <NavBar />
      <h1> Movie Trivia Game </h1>
      <Route exact path='/'>
        <h2>Test Your Knowledge!</h2>
        <p>Welcome to the game! You will get a number of multiple choice trivia questions covering a variety of movies. You get 30 seconds to answer each question. The quicker you answer, the more points you get! The highest scores will make it onto the leaderboard. Whenver your ready, hit the start button below. Good Luck!</p>
        <Link to='/game'><button>START</button></Link>
      </Route>
      <Route path='/game'>
        <Game questions={questions} />
      </Route>
      <Route path='/leaderboard'>
        <h2>Hall of Fame</h2>
        <Leaderboard />
      </Route>
      <Route path='/edit'>
        <NewQuestionForm />
      </Route>
    </div>
  )
}

export default App;
