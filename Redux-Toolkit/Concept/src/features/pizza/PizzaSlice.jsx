import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizzaBase : 1000,
}

export const PizzaSlice = createSlice({
    name : 'pizza',  // Slice name
    initialState,  // initialState
    reducers : {
        pizza_order : (state) => {
            state.pizzaBase = state.pizzaBase - 1
        }
    }
})

export const {pizza_order} = PizzaSlice.actions; 

// pizza_order --> Destructuring fotm PizzaSlice.actions
// PizzaSlice.actions is action creator

export default PizzaSlice.reducer;