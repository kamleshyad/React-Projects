import { configureStore } from "@reduxjs/toolkit";

import pizzaReducer from "../features/pizza/pizzaSlice.js";
import burgerReducer from "../features/burger/burgerSlice.js";

export const store = configureStore({
    reducer : {
        pizza : pizzaReducer,
        burger : burgerReducer
    },
}  
)