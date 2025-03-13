import {useCounter} from "../store/useCounter"

export const Counter = () => {

    const {inc, count, dec, reset} = useCounter();

    const clearPersistedState = () => {
        useCounter.persist.clearStorage(); // Remove localStorage data
  useCounter.getState().reset(); // Reset Zustand state
  useCounter.setState({}, true);
      };
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={inc}>Increase</button>
            <button onClick={dec}>Decrease</button>
            <button onClick={reset}>Reset</button>
            <button onClick={clearPersistedState}>Clear Persisted State</button>
        </div>
    )
}
