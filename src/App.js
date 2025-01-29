import { useState } from "react";

import './App.css';

function App() {

  const[vacationList, setVacationList] = useState([])

  function handleAddItems(item){
    setVacationList((vacationList) => [...vacationList, item])
  }

  function handleDeleteItem(id){
    setVacationList((vacationList) => vacationList.filter((item) => item.id != id ))
  }

  return (
    <div className="App">
      <header className="App-header">
      <Form onAddItems={handleAddItems}/>
      <DisplayList list={vacationList} onDeleteItem={handleDeleteItem}/>
      <ContactForm />
      </header>
    </div>
  );
}



function ContactForm(){
 
  return(
    <div>
      <h3>Enter your contact information</h3>
      <form  className="form1">
        <input type="text" placeholder="First and Last Name"></input>
        <p>
          <label>
            <input type='radio' value="option1" name="myRadio"/>
            Male
          </label>

          <label>
            <input type='radio' value="option2" name="myRadio" />
            Female
          </label>
        </p>

        
      </form>
    </div>
  )

}



function DisplayList({list, onDeleteItem}){

  return(
    <div>
      <ul>
        {list.map((item) => 
          (
          <li key={item.id}>
            <button onClick={()=> onDeleteItem(item.id)}>Delete</button>
            Destination: {item.destination} Duration: {item.duration} Budget: ${item.budget} Insurace: {item.insurance === true ? "Yes" : "No"}
          </li>)
      
      )}
      </ul>
    </div>
  )
}


function Form({onAddItems}){

  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState(1);
  const [budget, setBudget] = useState();
  const [insurance, setInsurance] = useState(false) 

  function handleSubmit(e){
      e.preventDefault();
      if(!destination) return;

      const newItem = {destination, duration, budget, insurance, id: Date.now()}
      console.log(newItem);
      onAddItems(newItem)
      setDestination("");
      setDuration(1);
      setBudget('')
      setInsurance(false)
    }

  return(
    <div>
      <form onSubmit={handleSubmit} className="form1">
        <h3>Complete your vacation inquiry</h3>
        <input type='text' placeholder='Destination?' value={destination} onChange={(e) => setDestination(e.target.value)} ></input>
        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
         {Array.from({length: 14}, (_, i) => i+1).map(num => <option value={num} key={num}>{num}</option> )}
        </select>
        <input type="text" placeholder="Budget?" value={budget} onChange={(e) => setBudget(e.target.value)}></input>
        <label><input type="checkbox" checked={insurance} onChange={(e) => setInsurance(e.target.checked)}></input>Will you get insurance?</label>
        
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;
