import './App.css'

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './redux/features/CounterSlice';

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="countersec">
      <h1>Counter</h1>
      <p>{count}</p>
      <ul className="reset">
        <li><button onClick={() => dispatch(increment() )}>Increment</button></li>
        <li><button onClick={() => dispatch(decrement() )}>Decrement</button></li>
        <li><button onClick={() => dispatch(reset() )}>Reset</button></li>
      </ul>
    </div>
  )
}

export default App
