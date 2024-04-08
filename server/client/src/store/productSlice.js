import { createSlice } from "@reduxjs/toolkit";



const productSlice = createSlice({
    name:'products',
    initialState:[],
    reducers:{
        setProduct(state,action){
            return action.payload
        }
    }
})

export const {setProduct} = productSlice.actions;
export default productSlice.reducer;