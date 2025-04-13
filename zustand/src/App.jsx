import './App.css';
import { CounterStore } from './store/CounterStore';

function App() {

  const {count, inc} = CounterStore();
  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={inc}>Increment</button>
    <button>Decrement</button>
    <button>Reset</button>
    </>
  )
}

export default App
