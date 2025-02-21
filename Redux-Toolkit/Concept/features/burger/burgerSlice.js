import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    burgerBase : 1000,
}

const burgerSlice = createSlice({
    name : 'burger',
    initialState,
    reducers : {
        burger_order : (state) => {
            state.burgerBase --
        }
    }
})

export const {burger_order} = burgerSlice.actions;

export default burgerSlice.reducer;