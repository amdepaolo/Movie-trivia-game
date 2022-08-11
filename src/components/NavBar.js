import React from "react";
import {NavLink} from "react-router-dom";   

function NavBar(){
    return(
        <div>
            <NavLink to='/' exact>
                Home
            </NavLink>
            <NavLink to='/game'>
                Game
            </NavLink>
            <NavLink to='/leaderboard'>
                Leaderboard
            </NavLink>
            <NavLink to='/edit'>
                Quizmasters 
            </NavLink>
        </div>
    )
}

export default NavBar