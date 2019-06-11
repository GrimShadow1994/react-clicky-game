import React from "react";
import "./style.css";

function Title(props) {
  return (
  <div className="jumbotron">
  <h1 className="display-4">React Clicky Game!</h1>
  <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
</div>
  )
}

export default Title;