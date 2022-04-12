import logo from './logo.svg';
import './App.css';

const compromissos = ['acordar', 'escovar os dentes', 'tomar café', 'ler o course', 'assistir a aula', 'fazer exercicios', 'dormir']

const Task = (value) => {
  return (
    <ul>{value.map((li) => <li>{li}</li>)}</ul>
    // <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <div>{Task(compromissos)}</div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
