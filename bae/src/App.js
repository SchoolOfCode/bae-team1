import './App.css';
import Stats from './Stats/Stats';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

      <Stats
      colors={['#429F15', '#77C650', '#E9FFE2','#F4FDF1' ]}
      stats={[
    {
      label: 'Diet',
      value: 25,
    },
    {
      label: 'Commute',
      value: 75,
    },
  ]}/>
    </div>
  );
}

export default App;
