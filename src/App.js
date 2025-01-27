import logo from './logo.svg';
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
  return(
    <div>
      <form>
        <h3>Complete your vacation inquiry</h3>
        <input type='text' placeholder='Destination?'></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;
