import './App.css';
import React, {useEffect, useState} from "react"
import Game from "./game";
import uniqid from "uniqid"

import flinstone from "./imgs/flinstone.png";
import homer from "./imgs/homer.jpg";
import patrick from "./imgs/patrick.jpeg";
import peppa from "./imgs/peppapig.webp";
import pikachu from "./imgs/pikachu.jpeg";
import buzz from "./imgs/buzz.jpg";
import mickey from "./imgs/mickey.jpeg";
import stewie from "./imgs/stewie.png";
import tom from "./imgs/tom.jpg";
import eye from "./imgs/eye.avif";
import schulz from "./imgs/schulz.jpg";
import phineas from "./imgs/phineas.jpeg";




function App() {
   const [score, setScore] = useState(0);
   const [Bestscore, setBestscore] = useState(0);
   const [clicked, setClicked] = useState([]);
   const [characters, setCharacters] = useState(
    [ {name: "Flintstone", src: flinstone, id: "flintstsone", key: uniqid()},
      {name: "Homer", src: homer, id: "homer", key: uniqid()},
      {name: "Patrick", src: patrick, id: "patrick", key: uniqid()},
      {name: "Peppa", src: peppa, id: "peppa", key: uniqid()},
      {name: "Pikachu", src: pikachu, id: "pikachu", key: uniqid()},
      {name: "Buzz", src: buzz, id: "buzz", key: uniqid()},
      {name: "Mickey", src: mickey, id: "mickey", key: uniqid()},
      {name: "Stewie", src: stewie, id: "stewie", key: uniqid()},
      {name: "Tom", src: tom, id: "tom", key: uniqid()},
      {name: "Eye", src: eye, id: "eye", key: uniqid()},
      {name: "Schulz", src: schulz, id: "schulz", key: uniqid()},
      {name: "Phineas", src: phineas, id: "phineas", key: uniqid()}, 
  ]
    )

   const change = (e) => {
    let id = e.target.id;
    if(clicked.includes(id) === true) {
      if(score > Bestscore) {
        setBestscore(score)
      }
      setScore(0);
      setClicked([]);
    }
    else {
      setClicked(clicked.concat(id));
      setScore(score + 1);
    }
   }

   function shuffle() {
    setCharacters(characters.sort( function(a, b) {return 0.5 - Math.random()}))
  }

   useEffect(() => {
     shuffle()
   }, [clicked])
  
   

  return (
    <div className='content'>
    <header>
     
    <h1>Cartoonz memory game</h1>
    <div className='scores'>
      <h2>Score: {score}</h2>
      <h2>High Score: {Bestscore}</h2>
    </div>
    </header>
     
    <Game change = {change} characters = {characters} />


   </div>
  )
}


 export default App;

