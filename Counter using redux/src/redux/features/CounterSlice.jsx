import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

export const CounterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment : (state) => {
            return {value : state.value+1}
        },
        decrement : (state) => {
            state.value = (state.value === 0) ? 0 : state.value-1
        },
        reset : (state) => {
            state.value = 0
        }
    }
})

export const {increment, decrement, reset} = CounterSlice.actions;

export default CounterSlice.reducer;