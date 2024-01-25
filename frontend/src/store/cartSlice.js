import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addProduct(state,action){

        },
        removeProduct(state,action){

        },
        increaseQuantity(state,action){

        },
        decreaseQuantity(state,action){

        }
    }
})

export const {
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity
}  = cartSlice.actions;

export default cartSlice.reducer;