import { useState } from "react";

import './App.css';

function App() {

  const[vacationList, setVacationList] = useState([])

  function handleAddItems(item){
    setVacationList((vacationList) => [...vacationList, item])
  }

  return (
    <div className="App">
      <header className="App-header">
      <Form onAddItems={handleAddItems}/>
      <VacationList list={vacationList} />
      </header>
    </div>
  );
}

function VacationList({list}){
  return(
    <div>
      <li>
        {list.destination} {list.budget} {list.duration}
      </li>
    </div>
  )
}

function Form({onAddItems}){

  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState(1);
  const [budget, setBudget] = useState();

  function handleSubmit(e){
      e.preventDefault();
      if(!destination) return;

      const newItem = {destination, duration, budget, insurace: false, id: Date.now()}
      console.log(newItem);
      onAddItems(newItem)
    }

  return(
    <div>
      <form onSubmit={handleSubmit} className="form1">
        <h3>Complete your vacation inquiry</h3>
        <input type='text' placeholder='Destination?'></input>
        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
         {Array.from({length: 14}, (_, i) => i+1).map(num => <option>{num }</option> )}
        </select>
        <input type="text" placeholder="Budget?"></input>
        <label><input type="checkbox"></input>Will you get insurance?</label>
        
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;
