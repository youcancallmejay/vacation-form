import { useState } from "react";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Form />
      </header>
    </div>
  );
}

function Form(){

  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState(1)

  function handleSubmit(){

  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Complete your vacation inquiry</h3>
        <input type='text' placeholder='Destination?'></input>
        <select value={duration}>
         {Array.from({length: 14}, (_, i) => i+1).map(num => <option>{num }</option> )}
        </select>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;
