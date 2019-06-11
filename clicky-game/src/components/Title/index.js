import React from "react";
import "./style.css";

function Title(props) {
  return (
  <div className="jumbotron">
  <h1 className="display-4">React Clicky Game!</h1>
  <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
  <hr className="my-4"/>
  <p>Status: {props.status}</p>
  <p>Surrent Score: {props.currentScore}</p>
  <p>Top Score: {props.topScore}</p>  
</div>
  )
}

export default Title;