import React from "react";
import "./style.css";
function Navbar(props) {
    return (
        <div className="container">

            <nav class="navbar fixed-top navbar-light bg-light">

                <p className="nav-item">Status: {props.status}</p>
                <p className="nav-item">Current Score: {props.currentScore}</p>
                <p className="nav-item">Top Score: {props.topScore}</p>

            </nav>
        </div>
    )
}

export default Navbar;