import { useState } from "react";

import './App.css';

function App() {

  const[vacationList, setVacationList] = useState([])
  const[contactFormList, setContactFormList] = useState([]);

  function handleAddItems(item){
    setVacationList((vacationList) => [...vacationList, item])
  }

  function HandleAddContactFormItem(item){
    setContactFormList((contactFormList) => [...contactFormList, item])
  }

  function handleDeleteItem(id){
    setVacationList((vacationList) => vacationList.filter((item) => item.id !== id ))
  }

  function handleDeleteContact(id){
    setContactFormList((contactFormList) => contactFormList.filter((item) => item.id !== id))
  }

  return (
    <div className="App">
      <header className="App-header">
      <Form onAddItems={handleAddItems}/>
      <DisplayList list={vacationList} onDeleteItem={handleDeleteItem}/>
      <ContactForm onAddContactList={HandleAddContactFormItem}/>
      <DisplayContactList list={contactFormList} onDeleteContact={handleDeleteContact}/>
      </header>
    </div>
  );
}


function DisplayContactList({list, onDeleteContact}){
  return(
    <div>
      <ul>
        {list.map((item) => (
          <li>
            <button onClick={() => onDeleteContact(item.id)}>Remove</button>
            {item.fullName} {item.gender} {item.age}
          </li>
        ))}
      </ul>
    </div>
  )
}


function ContactForm({onAddContactList}){
  const [fullName, setFullName] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();


  function handleSubmit(e){
    e.preventDefault();
    const newItem = {fullName, age, gender, id: Date.now}
    if(!fullName) return;

    onAddContactList(newItem)

    setFullName("")
    setAge(18)
    setGender()
  }
 
  return(
    <div>
      <h3>Enter your contact information</h3>
      <form  className="form1" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="First and Last Name" value={fullName} onChange={(e) => setFullName(e.target.value)}  ></input>
        <select value={age} onChange={(e) => setAge(e.target.value)}>
        {Array.from({length: 82}, (_, i) => i+18).map((num) => <option key={num}>{num}</option>)}            
        </select>

        <p>
          <label>
            <input type='radio' value="option1" name="myRadio" onClick={() => setGender('male')}/>
            Male
          </label>
          <label>
            <input type='radio' value="option2" name="myRadio" onClick={() => setGender('female')}  />
            Female
          </label>
        </p>
        <button>Submit Contact Info</button>
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
