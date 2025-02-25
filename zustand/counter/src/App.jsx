import React from "react";
import { useCounterStore } from "./store/CounterStore"; // Import your Zustand store

function App() {
    // Use Zustand store inside a component
    const { value, inc } = useCounterStore();

    return (
        <div>
            <h1>Counter: {value}</h1>
            <button onClick={inc}>Increment</button>
        </div>
    );
}

export default App;
