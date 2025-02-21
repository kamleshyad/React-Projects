import { store } from "./app/store.js";
import { pizza_order } from "./features/pizza/pizzaSlice.js";
import { burger_order } from "./features/burger/burgerSlice.js";

console.log("Initial State:", store.getState()); 

// Subscribe to state changes
const unsubscribe = store.subscribe(() => {
    console.log("Updated State:", store.getState());
});

// Dispatch an action
store.dispatch(pizza_order());
store.dispatch(pizza_order());
store.dispatch(burger_order());
store.dispatch(burger_order());
// Unsubscribe
unsubscribe();
