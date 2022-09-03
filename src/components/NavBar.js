import React from "react";
import {NavLink} from "react-router-dom";   

function NavBar({onGameClick}){
    return(
        <div id="navBar">
            <NavLink to='/' exact>
                Home
            </NavLink>
            <NavLink onClick={onGameClick} to='/game'>
                Game
            </NavLink>
            <NavLink to='/leaderboard'>
                Leaderboard
            </NavLink>
            {/* <NavLink to='/edit'>
                Quizmaster
            </NavLink> */}
        </div>
    )
}

export default NavBar