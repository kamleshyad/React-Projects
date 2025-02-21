import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizzaBase : 1000,
}

const pizzaSlice = createSlice({
    name : "pizza",  // Slice Name
    initialState,  // InitialState

    // reducer function 
    reducers : {   
        pizza_order : (state) =>{
            state.pizzaBase -= 1;
        }
    }
})


export const {pizza_order} = pizzaSlice.actions;  // action creator

export default pizzaSlice.reducer;  // reducer

/*


1) --> React Component Dispatches an Action

    const dispatch = useDispatch();
    dispatch(pizza_order()); 

    pizza_order() is an action creator jo action object genrate karta hai. Redux Toolkit automatically creates action creators for each reducer.

    { "type": "pizza/pizza_order" }

    --> An action type is a string that identifies what action is being dispatched.

    --> type: 'pizza/pizza_order',

    --> <slice_name>/<reducer_name>

    dispatch(pizza_order()) sends this action to Redux.

2) --> Redux Store Receives the Action

    Redux checks which reducer should handle this action.

    import { configureStore } from "@reduxjs/toolkit";
    import pizzaReducer from "./pizzaSlice";

    const store = configureStore({
        reducer: {
            pizza: pizzaReducer, // Registering pizzaSlice reducer
        },
    });

    export default store;

    1) Redux sees that the action type is "pizza/pizza_order".

    2) It sends this action to the pizza reducer (because "pizza" is the slice name).

3) --> Reducer Handles the Action & Updates State

    Your reducer function inside pizzaSlice.js looks like this:

    const pizzaSlice = createSlice({
        name: "pizza",
        initialState,
        reducers: {
            pizza_order: (state) => {
                state.pizzaBase--; // State update
            }
        }
    });

    1️⃣ The reducer sees the action { type: "pizza/pizza_order" }.
        ⬇
    2️⃣ The function pizza_order: (state) => { state.pizzaBase--; } runs.
        ⬇
    3️⃣ It modifies the state:
            1) If pizzaBase was 1000, it becomes 999.
            2) Redux updates the store with the new state.

4) --> React Components Get Updated State

    import { useSelector } from "react-redux";

    const PizzaStock = () => {
        const pizzaBase = useSelector((state) => state.pizza.pizzaBase);

        return <h2>Pizzas Left: {pizzaBase}</h2>;
    };

    Flow of redux

        1️⃣ User clicks "Order Pizza" button
            ⬇
        2️⃣ dispatch(pizza_order()) is called
            ⬇
        3️⃣ Redux store sends action to reducer
            ⬇
        4️⃣ Reducer updates state (pizzaBase--)
            ⬇
        5️⃣ Updated state triggers re-render
            ⬇
        6️⃣ UI shows new pizza count

*/
