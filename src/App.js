import React, {useState,useEffect} from "react"
import './App.css';

function App() {

  const[quates,setQuates] =useState("")
  const getQuate = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random()*data.length)
      setQuates(data[randomNum])
    })
  }

  useEffect(() => {
    getQuate();
  },[])


  return (
    <div className="App">
      <div className="quote">
        <p>{quates.text}</p>
        <p>{quates.author}</p>

        <div className="btnContainer">
          <button onClick={getQuate} className="btn">Get Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
