import React from 'react';


const IconCard = props => (
    <div 
    className="card" 
    value={props.id} 
    onClick={() => props.clickedPlayer(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
)


// // import React from "react";


// const FriendCard = props => (
//   <div 
//     className="card" 
//     value={props.id} 
//     onClick={() => props.clickedPlayer(props.id)}
//   >
//     <div className="img-container">
//       <img alt={props.name} src={props.image} />
//     </div>
//   </div>
// );


export default IconCard;
