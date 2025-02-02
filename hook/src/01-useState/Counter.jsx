import React, { useState } from 'react'

const Counter = () => {

    const [state, setState] = useState(0);

    const handleIncrement = () => {
        setState(state + 1);
    }

    const handleDecrement = () => {
        setState(state === 0 ? 0 : state - 1)
    }

    const handleReset = () => {
        setState(0)
    }

    return (
        <div className="countersec">
            <div className="container">
                <div className="counterbox">
                    <h1>Count : {state}</h1>
                    <div className="counterbtns">
                        <button className="incre" onClick={() => handleIncrement() }>Increment</button>
                        <button className="decre" onClick={() => handleDecrement() }>Decrement</button>
                        <button className="reset" onClick={() => handleReset() }>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter
