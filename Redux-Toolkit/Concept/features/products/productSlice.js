import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

    const initialState = {
        loading : false,
        products : [],
        error : ""
    }

const fetchProducts = createAsyncThunk('product/fetchProducts', ()=> {
    return axios.get('https://fakestoreapi.com/products/')
    .then((res) =>console.log(res.data))
})

export const productSlice = createSlice({
    name : 'product',
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchProducts.pending, (state)=> {
            state.loading=true
        }),
        builder.addCase(fetchProducts.fulfilled, (state) => {
            state.loading=false,
            state.products=action.payload
        }),
        builder.addCase(fetchProducts.rejected, (state) => {
            state.loading=false,
            state.error=action.error.message
        })
    }
})

