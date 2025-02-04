import { useReducer } from "react";

const initialState = {
    value : 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment' :
            return { value : state.value + action.payload}
        case 'decrement' :
            return {value : state.value === 0 ? 0 : state.value - action.payload}
        case 'reset' :
            return {value : 0}
        default :
            return state;
    }
}

export const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="countersec">
            <div className="container">
                <div className="counterbox">
                    <h1>Count : {state.value}</h1>
                    <div className="counterbtns">
                        <button className="incre" onClick={() => dispatch({type : "increment", payload : 1})}>Increment</button>
                        <button className="decre" onClick={() => dispatch({type : "decrement", payload : 1})}>Decrement</button>
                        <button className="reset" onClick={() => dispatch({type : "reset"})}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}