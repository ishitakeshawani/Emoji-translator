import React,{ useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🎼": "musical score",
  "🎵": "musical note",
  "🎸": "guitar",
  "🧑‍🎤": "singer",
  "🎙️": "microphone",
  "📯": "postal horn",
  "🍕": "pizza",
  "🥪": "sandwich",
  "🍣": "sushi",
  "🍩": "doughnut",
  "🍿": "popcorn"
};

var emojisWeKnow = Object.keys(emojiDictionary)

export default function App() {
 
   const [meaning,setMeaning] = useState("")
   function emojiInputHandler(event){
      var userInput = event.target.value;

      var meaning = emojiDictionary[userInput];

      if(meaning === undefined){
        meaning = "we don't have this in our databse"
      }

      setMeaning(meaning);
      
   }
   function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Know the Meaning of Emoji</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{ meaning }</h2>
      <h3>emojis we know</h3>
      {
        emojisWeKnow.map(function(emoji){
          return <span 
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem",cursor: "pointer"}} key={emoji}>{emoji}</span>
        })
      }
    </div>
  );
}
