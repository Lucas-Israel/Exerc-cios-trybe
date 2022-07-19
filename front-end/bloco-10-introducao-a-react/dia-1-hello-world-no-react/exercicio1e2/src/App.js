import './App.css';

const array = ['compromisso1', 'compromisso2', 'compromisso3', 'compromisso4', 'compromisso5', ];

const Task = (value) => {
  return (
    value.map((item) => <li>{item}</li>)
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {Task(array)}
      </header>
    </div>
  );
}

export default App;
