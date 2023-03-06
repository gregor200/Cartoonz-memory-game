import React from "react";

function Game(props) {
    const {change, characters} = props;

  return (
    <div className="game">  
       {characters.map((item) => (
        <div className="card" id= {item.id} onClick={change} key = {item.key}>
            <img src = {item.src} alt="cartoon" /> 
            <h2>{item.name}</h2>
        </div>
       ))}
    </div>
  )
}

export default Game;