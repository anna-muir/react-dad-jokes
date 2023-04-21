import './App.css';
import JokeGenerator from './components/JokeGenerator';

function App() {
  return (
    <>
      <h1>Get a dad joke</h1>
      <div className='joke-container'>
        <JokeGenerator />
      </div>
    </>
  );
}

export default App;
