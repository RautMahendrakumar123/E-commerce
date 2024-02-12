import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addProduct(state,action){
            const isProductInCart = state.find(product=>product._id===action.payload._id);
            if(isProductInCart){
                toast.error('product already added')
            }else{
                const total = action.payload.price
               state = [...state,{...action.payload,quantity:1,total:total}] 
               toast.success('Product added to Cart')
               return state
               
            }
        },
        removeProduct(state, action){
            const index = state.findIndex(product => product._id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        increaseQuantity(state, action){
            const index = state.findIndex(product => product._id === action.payload);
            if (index !== -1) {
                state[index].quantity += 1;
                state[index].total = state[index].quantity * state[index].price;
            }
        },
        decreaseQuantity(state, action){
            const index = state.findIndex(product => product._id === action.payload);
            if (index !== -1 && state[index].quantity > 1) {
                state[index].quantity -= 1;
                state[index].total = state[index].quantity * state[index].price;
            }
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



