import {useCounter} from "../store/useCounter"

export const Counter = () => {

    const {inc, count, dec, reset} = useCounter();

    const clearPersistedState = () => {
        localStorage.clear();
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
