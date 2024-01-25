import { createSlice } from "@reduxjs/toolkit";



const productSlice = createSlice({
    name:'products',
    initialState:[],
    reducers:{
        setProduct(state,payload){
        }
    }
})

export const {setProduct} = productSlice.actions;
export default productSlice.reducer;